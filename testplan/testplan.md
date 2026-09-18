# SauceDemo Login Test Plan

## Test name: Successful login with valid credentials

### Test steps:
1. Open the SauceDemo login page at https://www.saucedemo.com/.
2. Enter the username as standard_user.
3. Enter the password as secret_sauce.
4. Click the Login button.
5. Verify that the inventory page loads successfully.

### Test data:
- Username: standard_user
- Password: secret_sauce

### Expected result:
- User is redirected to the products/inventory page.
- The page header displays "Products".
- The user can access the application without any error message.

---

## Test name: Login attempt with invalid credentials

### Test steps:
1. Open the SauceDemo login page at https://www.saucedemo.com/.
2. Enter a valid username such as standard_user.
3. Enter an incorrect password such as wrong_password.
4. Click the Login button.
5. Observe the validation message shown by the application.

### Test data:
- Username: standard_user
- Password: wrong_password

### Expected result:
- User remains on the login page.
- An error message is displayed: "Username and password do not match any user in this service".
- The user is not allowed to log in.

---

## Test name: Locked-out user login attempt

### Test steps:
1. Open the SauceDemo login page at https://www.saucedemo.com/.
2. Enter the username as locked_out_user.
3. Enter the password as secret_sauce.
4. Click the Login button.
5. Check the login error message displayed by the system.

### Test data:
- Username: locked_out_user
- Password: secret_sauce

### Expected result:
- User remains on the login page.
- An error message is displayed: "Epic sadface: Sorry, this user has been locked out.".
- User is denied access to the application.
