"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Pricing logic: price per bottle based on quantity
function getPricePerBottle(quantity: number): number {
  if (quantity >= 3) {
    return parseFloat((119.99 / 3).toFixed(2)); // Buy 3 Bottles = $119.99
  }
  if (quantity === 2) {
    return parseFloat((94.99 / 2).toFixed(2)); // Buy 2 Bottles = $94.99
  }
  return 49.99;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  customerEmail: string;
  setCustomerEmail: (email: string) => void;
  customerPhone: string;
  setCustomerPhone: (phone: string) => void;
  smsConsent: boolean;
  setSmsConsent: (consent: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [customerEmail, setCustomerEmailState] = useState("");
  const [customerPhone, setCustomerPhoneState] = useState("");
  const [smsConsent, setSmsConsentState] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart, email, phone, and SMS consent from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
    const savedEmail = localStorage.getItem("customerEmail");
    if (savedEmail) {
      setCustomerEmailState(savedEmail);
    }
    const savedPhone = localStorage.getItem("customerPhone");
    if (savedPhone) {
      setCustomerPhoneState(savedPhone);
    }
    const savedSmsConsent = localStorage.getItem("smsConsent");
    if (savedSmsConsent) {
      setSmsConsentState(savedSmsConsent === "true");
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const setCustomerEmail = (email: string) => {
    setCustomerEmailState(email);
    if (email) {
      localStorage.setItem("customerEmail", email);
    }
  };

  const setCustomerPhone = (phone: string) => {
    setCustomerPhoneState(phone);
    localStorage.setItem("customerPhone", phone);
  };

  const setSmsConsent = (consent: boolean) => {
    setSmsConsentState(consent);
    localStorage.setItem("smsConsent", String(consent));
  };

  // Notify GHL of active cart contents for the abandoned-cart automation.
  // Only fires once per distinct cart + contact-info combination, and only
  // once we know the customer's email (from the discount popup or the cart page).
  useEffect(() => {
    if (!isLoaded || items.length === 0 || !EMAIL_REGEX.test(customerEmail)) return;

    const signature = JSON.stringify({
      email: customerEmail,
      phone: customerPhone,
      smsConsent,
      items: items.map((item) => [item.id, item.quantity, item.price]),
    });
    if (localStorage.getItem("cartActivitySignature") === signature) return;
    localStorage.setItem("cartActivitySignature", signature);

    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    fetch("/api/cart-activity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: customerEmail,
        phone: customerPhone || undefined,
        smsConsent,
        cartItems: items,
        totalPrice,
      }),
    }).catch(() => {});
  }, [items, isLoaded, customerEmail, customerPhone, smsConsent]);

  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number = 1) => {
    setItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: newQuantity, price: getPricePerBottle(newQuantity) }
            : i
        );
      }
      return [...prev, { ...item, quantity, price: getPricePerBottle(quantity) }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity, price: getPricePerBottle(quantity) }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem("cartActivitySignature");
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        customerEmail,
        setCustomerEmail,
        customerPhone,
        setCustomerPhone,
        smsConsent,
        setSmsConsent,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
