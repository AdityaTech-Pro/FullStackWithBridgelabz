# Banking Interest Calculator - File Connections

## Overview
All three files in the Banking Interest Calculator project are now properly connected and working together.

---

## File Connections

### 1. **index.html** (HTML - Structure & Form)
**Purpose:** Main user interface file containing the web form and result display areas.

**Key Features:**
- Form inputs for Account Type, Principal Amount, and Investment Period
- Results section to display calculation outputs
- Information cards explaining how the calculator works
- **Links to:** `styles.css` and `script.js`

**File References:**
```html
<!-- CSS Link (Line 7) -->
<link rel="stylesheet" href="styles.css">

<!-- JavaScript Link (Line 122) -->
<script src="script.js"></script>
```

**Functions Called from script.js:**
- `calculateInterest(event)` - Form submission handler (Line 35)
- UI elements are populated by this function

---

### 2. **script.js** (JavaScript - Logic & Calculations)
**Purpose:** Contains all business logic, calculation functions, and web interface handlers.

**Key Functions:**

#### Core Calculation Functions:
- `isValidAccountType(type)` - Validates account type
- `getBaseInterestRate(type)` - Returns base rate (4% or 6.5%)
- `isBonusEligible(depositAmount)` - Checks if bonus applies (>₹1,00,000)
- `calculateEffectiveRate(type, amount)` - Calculates total rate with bonus
- `calculateFinalBalance(principal, rate, years)` - Compound interest formula
- `calculateInterestEarned(finalBalance, principal)` - Interest earned calculation

#### Web Interface Functions:
- `formatCurrency(value)` - Formats numbers as Indian Rupees (₹)
- `addLog(message)` - Adds entries to calculation log
- `calculateInterest(event)` - Main form handler that:
  - Gets form values from `index.html`
  - Performs all calculations
  - Populates result elements in `index.html`
  - Shows results section

#### Constants:
```javascript
const SAVINGS_RATE = 4;              // 4% for Savings Account
const FIXED_DEPOSIT_RATE = 6.5;     // 6.5% for Fixed Deposit
const BONUS_THRESHOLD = 100000;     // ₹1,00,000
const BONUS_RATE = 1;               // +1% bonus rate
```

---

### 3. **styles.css** (CSS - Styling & Layout)
**Purpose:** All visual styling and responsive design for the calculator.

**Key Styling Components:**
- Container and layout structure
- Header section with gradient background
- Form styling (inputs, selects, buttons)
- Results display grid
- Console output styling
- Information cards
- Responsive design for different screen sizes

---

## Data Flow Diagram

```
User Input (index.html form)
        ↓
calculateInterest() event handler (script.js)
        ↓
Input Validation & Calculations (script.js functions)
        ↓
DOM Manipulation (Update index.html elements)
        ↓
Display Results with CSS Styling (styles.css)
```

---

## How It Works (Step by Step)

1. **User fills the form in index.html:**
   - Selects Account Type (Savings or Fixed Deposit)
   - Enters Principal Amount
   - Enters Investment Period

2. **User clicks "Calculate Interest" button**
   - `calculateInterest(event)` function from script.js is triggered
   - Form submission is prevented

3. **Script.js processes the data:**
   - Retrieves values from HTML form elements
   - Validates account type
   - Checks bonus eligibility
   - Calculates effective interest rate
   - Applies compound interest formula
   - Generates detailed calculation log

4. **Results are displayed:**
   - Account details, rates, and calculations populate index.html elements
   - Results section becomes visible
   - Page scrolls smoothly to show results
   - CSS styling makes it visually appealing

5. **Bonus features:**
   - Enter key in the years field submits the form
   - Color-coded log entries (info, bonus, success, highlight)
   - Responsive design works on all devices

---

## File Organization

```
Banking Interest Calculator/
├── index.html          (HTML - Form & Structure)
├── script.js          (JavaScript - Logic & Functions)
├── styles.css         (CSS - Styling & Layout)
└── CONNECTION_SUMMARY.md  (This file)
```

---

## Testing the Connection

To verify all files are working together:

1. Open `index.html` in a web browser
2. Fill in the form fields
3. Click "Calculate Interest"
4. Verify:
   - Form styling appears (from styles.css) ✓
   - Results display with calculations (from script.js) ✓
   - All values are formatted correctly ✓
   - Color-coded log entries show (from styles.css) ✓

---

## Notes

- All files must be in the same directory
- The `script.js` file includes test cases that run in the console
- No external dependencies or libraries are required
- The calculator uses vanilla JavaScript (no frameworks)
- Full responsive design for mobile and desktop browsers

