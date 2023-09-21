# Delivery App Backend

## Introduction

The Delivery App Backend is a Node.js-based application designed to support online delivery shops (e.g., restaurants, fast food) in managing their menu, handling incoming orders, and supporting multiple currencies for item prices.

## Features

- Menu Management: Easily manage a menu with multiple categories and items.
- Currency Support: Support multiple currencies for item prices (on the menu) using external APIs.
- Order Handling: Handle incoming orders and provide order details.
- Merchant Dashboard: View incoming orders through a simple web page.

## Requirements

To meet the requirements of an online delivery shop, the backend includes the following features:

1. **Menu Management:**
   - The application supports a menu with a minimum of 3 categories (e.g., Appetizers, Drinks, Main Dishes).
   - Each category includes at least 2 items.

2. **Currency Support:**
   - Item prices are stored in Euro (EUR).
   - The API is designed to support more currencies using publicly available APIs (e.g., [Fixer.io](http://fixer.io)) for currency conversion.

3. **Order Handling:**
   - Incoming orders are processed and managed within the system.
   - Item availability and order validation are ensured.

4. **Merchant Dashboard:**
   - A simple web page is provided for merchants to view incoming orders.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database
- Access to a currency conversion API (e.g., Fixer.io)

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/nmermigas/delivery-app.git]
   
2. Navigate to the project directory:
    ```bash
    cd delivery-app-backend

3. Install dependencies:
   ```bash
    npm install

### Usage

To start the backend server, run the following command in the root directory:
 ```bash
 npm run server

