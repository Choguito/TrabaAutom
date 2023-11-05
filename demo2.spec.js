import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';


test('test', async ({ page }) => {  

  const Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('standard_user','secret_sauce')
  

});


test('Compras', async ({page})=>{
//entramos a la pagina
    await page.goto("https://www.saucedemo.com/")
    
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    
    //llenamos el formulario
     //await page.locator('[data-test="username"]').fill('standard_user');
     //await page.locator('[data-test="password"]').fill('secret_sauce');
   
    //boton login
    //await page.getByRole('button',{type:'submit'}).click()
    
    //entramos para ver el detalle de ropa
    await page.locator('a[id="item_4_title_link"] ').click()  
    
    //aniadir al carrito
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    //vemos el precio
    await expect(page.locator('.inventory_details_price')).toBeVisible();
    
    //entramos al carrito de compras
    await page.locator('//span[@class="shopping_cart_badge"]').click()
    
    //volvemos atras
    await page.locator('[data-test="continue-shopping"]').click();
    
    //Seleccionamos las opciones
    await page.locator('[data-test="product_sort_container"]').selectOption('hilo');
   
   //entramos para ver el detalle de ropa
   await page.locator('a[id="item_3_title_link"] ').click()
   
   //comprar la camiseta roja
   await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

   //ver el carrito de compras
   await page.locator('//span[@class="shopping_cart_badge"]').click()

   //pagar
   await page.locator('[data-test="checkout"]').click();

   //llenar mis datos para hacer la compra
   await page.getByPlaceholder('First Name').fill("Elvis")
   await page.getByPlaceholder('Last Name').fill("Coca Vergara")
   await page.getByPlaceholder('Zip/Postal Code').fill("04")

   //presionamos continuar
   await page.locator('[data-test="continue"]').click();

   //finalizamos la compra
   await page.locator('[data-test="finish"]').click();

   //Gracias por su compra
   await expect(page.locator('.complete-header')).toBeVisible();

   //cerramos el inspector
    await page.close()
})