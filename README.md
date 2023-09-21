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
   - The API is designed to support more currencies using publicly available APIs (using [Fixer.io](http://fixer.io)) for currency conversion.

3. **Order Handling:**
   - Incoming orders are processed and managed within the system.
   - Item availability and order validation are ensured.

4. **Merchant Dashboard:**
   - A web page is provided for merchants to view incoming orders.

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
```

The backend API will be accessible at http://localhost:8000 by default.

### API Endpoints

/v1/menu

GET: Get the menu with all the items. So: http://localhost:8000/v1/menu

POST: Add a new item to the menu. So : http://localhost:8000/v1/menu

 - The acceptable categories are only: "Appetizers", "Drinks", "Main Dishes", "Desserts".

 - Example of a post request in JSON format:

```
{
   "itemName": "Carbonara",
   "category": "Main Dishes",
   "description": "Italian Dish",
   "price": 12.99,
}
```

/v1/orders

GET: Get a list of incoming orders in a webpage. So: http://localhost:8000/v1/orders

POST: Place a new order. So: http://localhost:8000/v1/orders

- Example of a post request in JSON format:

```
{
    "items": [
        {
            "itemName": "Pizza",
            "quantity": 3
        },
        {
            "itemName": "Caprese Salad",
            "quantity": 1
        },
        {
            "itemName": "Garlic Bread",
            "quantity": 7
        },
        {
            "itemName": "Soda",
            "quantity": 3
        }
    ]
}
```

### Testing

To run the tests, run the following command in the root directory:
```
npm run test
```

This README provides an overview of the backend application, its features, requirements, and how to get started with it.




