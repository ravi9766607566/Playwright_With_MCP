import { test, expect } from '@playwright/test';
const loginPayLoad = { userEmail: "sharmaravi962@gmail.com", userPassword: "Yahoo183@" };

test('Login API returns an authentication token', async ({ request }) => {
    const loginResponse = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: loginPayLoad
    });

    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    expect(loginResponseJson.token).toBeTruthy();
    console.log(loginResponseJson.token);
});