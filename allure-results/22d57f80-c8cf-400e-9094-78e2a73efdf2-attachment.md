# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advanced-features\advanced-tests.spec.js >> Advanced Search Features >> Search is case-insensitive
- Location: tests\advanced-features\advanced-tests.spec.js:183:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/products", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e38]:
    - img "Website for practice" [ref=e39]
    - textbox "Search Product" [ref=e40]
    - button "" [ref=e41] [cursor=pointer]:
      - generic [ref=e42]: 
  - generic [ref=e45]:
    - generic [ref=e47]:
      - heading "Category" [level=2] [ref=e48]
      - generic [ref=e49]:
        - heading " Women" [level=4] [ref=e52]:
          - link " Women" [ref=e53] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e55]: 
            - text: Women
        - heading " Men" [level=4] [ref=e58]:
          - link " Men" [ref=e59] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e61]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e64]:
          - link " Kids" [ref=e65] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e67]: 
            - text: Kids
      - insertion [ref=e69]:
        - generic [ref=e72]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e74]: Discover more
          - link "T-Shirt" [ref=e75] [cursor=pointer]:
            - generic "T-Shirt" [ref=e76]
            - img [ref=e78]
          - link "Women's Dresses" [ref=e80] [cursor=pointer]:
            - generic "Women's Dresses" [ref=e81]
            - img [ref=e83]
          - link "Babyhug Clothing" [ref=e85] [cursor=pointer]:
            - generic "Babyhug Clothing" [ref=e86]
            - img [ref=e88]
          - link "Baby Care & Hygiene" [ref=e90] [cursor=pointer]:
            - generic "Baby Care & Hygiene" [ref=e91]
            - img [ref=e93]
          - link "Ecommerce Website Products" [ref=e95] [cursor=pointer]:
            - generic "Ecommerce Website Products" [ref=e96]
            - img [ref=e98]
          - link "T-Shirts" [ref=e100] [cursor=pointer]:
            - generic "T-Shirts" [ref=e101]
            - img [ref=e103]
          - link "Dictionaries & Encyclopedias" [ref=e105] [cursor=pointer]:
            - generic "Dictionaries & Encyclopedias" [ref=e106]
            - img [ref=e108]
          - link "Casual Apparel" [ref=e110] [cursor=pointer]:
            - generic "Casual Apparel" [ref=e111]
            - img [ref=e113]
      - generic [ref=e115]:
        - heading "Brands" [level=2] [ref=e116]:
          - link "Brands" [ref=e117] [cursor=pointer]:
            - /url: "#"
            - img [ref=e118]
            - text: Brands
        - list [ref=e121]:
          - listitem [ref=e122]:
            - link "(6) Polo" [ref=e123] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e124]: (6)
              - text: Polo
          - listitem [ref=e125]:
            - link "(5) H&M" [ref=e126] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e127]: (5)
              - text: H&M
          - listitem [ref=e128]:
            - link "(5) Madame" [ref=e129] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e130]: (5)
              - text: Madame
          - listitem [ref=e131]:
            - link "(3) Mast & Harbour" [ref=e132] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e133]: (3)
              - text: Mast & Harbour
          - listitem [ref=e134]:
            - link "(4) Babyhug" [ref=e135] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e136]: (4)
              - text: Babyhug
          - listitem [ref=e137]:
            - link "(3) Allen Solly Junior" [ref=e138] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e139]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e140]:
            - link "(3) Kookie Kids" [ref=e141] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e142]: (3)
              - text: Kookie Kids
          - listitem [ref=e143]:
            - link "(5) Biba" [ref=e144] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e145]: (5)
              - text: Biba
    - generic [ref=e147]:
      - heading "All Products" [level=2] [ref=e148]
      - generic [ref=e150]:
        - generic [ref=e151]:
          - generic [ref=e152]:
            - img "ecommerce website products" [ref=e153]
            - heading "Rs. 500" [level=2] [ref=e154]
            - paragraph [ref=e155]: Blue Top
            - generic [ref=e156] [cursor=pointer]:
              - generic [ref=e157]: 
              - text: Add to cart
          - generic [ref=e158]:
            - heading "Rs. 500" [level=2] [ref=e159]
            - paragraph [ref=e160]: Blue Top
            - generic [ref=e161] [cursor=pointer]:
              - generic [ref=e162]: 
              - text: Add to cart
        - list [ref=e164]:
          - listitem [ref=e165]:
            - link " View Product" [ref=e166] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=e167]: 
              - text: View Product
      - generic [ref=e169]:
        - generic [ref=e170]:
          - generic [ref=e171]:
            - img "ecommerce website products" [ref=e172]
            - heading "Rs. 400" [level=2] [ref=e173]
            - paragraph [ref=e174]:
              - text: Men
              - link "Tshirt" [ref=e175] [cursor=pointer]:
                - /url: "#"
                - img [ref=e176]
                - text: Tshirt
            - generic [ref=e178] [cursor=pointer]:
              - generic [ref=e179]: 
              - text: Add to cart
          - generic [ref=e180]:
            - heading "Rs. 400" [level=2] [ref=e181]
            - paragraph [ref=e182]: Men Tshirt
            - generic [ref=e183] [cursor=pointer]:
              - generic [ref=e184]: 
              - text: Add to cart
        - list [ref=e186]:
          - listitem [ref=e187]:
            - link " View Product" [ref=e188] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=e189]: 
              - text: View Product
      - generic [ref=e191]:
        - generic [ref=e192]:
          - generic [ref=e193]:
            - img "ecommerce website products" [ref=e194]
            - heading "Rs. 1000" [level=2] [ref=e195]
            - paragraph [ref=e196]:
              - text: Sleeveless
              - link "Dress" [ref=e197] [cursor=pointer]:
                - /url: "#"
                - img [ref=e198]
                - text: Dress
            - generic [ref=e200] [cursor=pointer]:
              - generic [ref=e201]: 
              - text: Add to cart
          - generic [ref=e202]:
            - heading "Rs. 1000" [level=2] [ref=e203]
            - paragraph [ref=e204]: Sleeveless Dress
            - generic [ref=e205] [cursor=pointer]:
              - generic [ref=e206]: 
              - text: Add to cart
        - list [ref=e208]:
          - listitem [ref=e209]:
            - link " View Product" [ref=e210] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=e211]: 
              - text: View Product
      - generic [ref=e213]:
        - generic [ref=e214]:
          - generic [ref=e215]:
            - img "ecommerce website products" [ref=e216]
            - heading "Rs. 1500" [level=2] [ref=e217]
            - paragraph [ref=e218]: Stylish Dress
            - generic [ref=e219] [cursor=pointer]:
              - generic [ref=e220]: 
              - text: Add to cart
          - generic [ref=e221]:
            - heading "Rs. 1500" [level=2] [ref=e222]
            - paragraph [ref=e223]: Stylish Dress
            - generic [ref=e224] [cursor=pointer]:
              - generic [ref=e225]: 
              - text: Add to cart
        - list [ref=e227]:
          - listitem [ref=e228]:
            - link " View Product" [ref=e229] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=e230]: 
              - text: View Product
      - generic [ref=e232]:
        - generic [ref=e233]:
          - generic [ref=e234]:
            - img "ecommerce website products" [ref=e235]
            - heading "Rs. 600" [level=2] [ref=e236]
            - paragraph [ref=e237]: Winter Top
            - generic [ref=e238] [cursor=pointer]:
              - generic [ref=e239]: 
              - text: Add to cart
          - generic [ref=e240]:
            - heading "Rs. 600" [level=2] [ref=e241]
            - paragraph [ref=e242]: Winter Top
            - generic [ref=e243] [cursor=pointer]:
              - generic [ref=e244]: 
              - text: Add to cart
        - list [ref=e246]:
          - listitem [ref=e247]:
            - link " View Product" [ref=e248] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=e249]: 
              - text: View Product
      - generic [ref=e251]:
        - generic [ref=e252]:
          - generic [ref=e253]:
            - img "ecommerce website products" [ref=e254]
            - heading "Rs. 400" [level=2] [ref=e255]
            - paragraph [ref=e256]: Summer White Top
            - generic [ref=e257] [cursor=pointer]:
              - generic [ref=e258]: 
              - text: Add to cart
          - generic [ref=e259]:
            - heading "Rs. 400" [level=2] [ref=e260]
            - paragraph [ref=e261]: Summer White Top
            - generic [ref=e262] [cursor=pointer]:
              - generic [ref=e263]: 
              - text: Add to cart
        - list [ref=e265]:
          - listitem [ref=e266]:
            - link " View Product" [ref=e267] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=e268]: 
              - text: View Product
      - generic [ref=e270]:
        - generic [ref=e271]:
          - generic [ref=e272]:
            - img "ecommerce website products" [ref=e273]
            - heading "Rs. 1000" [level=2] [ref=e274]
            - paragraph [ref=e275]: Madame Top For Women
            - generic [ref=e276] [cursor=pointer]:
              - generic [ref=e277]: 
              - text: Add to cart
          - generic [ref=e278]:
            - heading "Rs. 1000" [level=2] [ref=e279]
            - paragraph [ref=e280]: Madame Top For Women
            - generic [ref=e281] [cursor=pointer]:
              - generic [ref=e282]: 
              - text: Add to cart
        - list [ref=e284]:
          - listitem [ref=e285]:
            - link " View Product" [ref=e286] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=e287]: 
              - text: View Product
      - generic [ref=e289]:
        - generic [ref=e290]:
          - generic [ref=e291]:
            - img "ecommerce website products" [ref=e292]
            - heading "Rs. 700" [level=2] [ref=e293]
            - paragraph [ref=e294]: Fancy Green Top
            - generic [ref=e295] [cursor=pointer]:
              - generic [ref=e296]: 
              - text: Add to cart
          - generic [ref=e297]:
            - heading "Rs. 700" [level=2] [ref=e298]
            - paragraph [ref=e299]: Fancy Green Top
            - generic [ref=e300] [cursor=pointer]:
              - generic [ref=e301]: 
              - text: Add to cart
        - list [ref=e303]:
          - listitem [ref=e304]:
            - link " View Product" [ref=e305] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=e306]: 
              - text: View Product
      - generic [ref=e308]:
        - generic [ref=e309]:
          - generic [ref=e310]:
            - img "ecommerce website products" [ref=e311]
            - heading "Rs. 499" [level=2] [ref=e312]
            - paragraph [ref=e313]:
              - text: Sleeves Printed Top - White
              - link "Retail Trade" [ref=e314] [cursor=pointer]:
                - img [ref=e316]
                - text: Retail Trade
            - generic [ref=e318] [cursor=pointer]:
              - generic [ref=e319]: 
              - text: Add to cart
          - generic [ref=e320]:
            - heading "Rs. 499" [level=2] [ref=e321]
            - paragraph [ref=e322]: Sleeves Printed Top - White
            - generic [ref=e323] [cursor=pointer]:
              - generic [ref=e324]: 
              - text: Add to cart
        - list [ref=e326]:
          - listitem [ref=e327]:
            - link " View Product" [ref=e328] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=e329]: 
              - text: View Product
      - generic [ref=e331]:
        - generic [ref=e332]:
          - generic [ref=e333]:
            - img "ecommerce website products" [ref=e334]
            - heading "Rs. 359" [level=2] [ref=e335]
            - paragraph [ref=e336]:
              - text: Half Sleeves Top Schiffli Detailing - Pink
              - link "Kookie Kids Clothing" [ref=e337] [cursor=pointer]:
                - img [ref=e339]
                - text: Kookie Kids Clothing
            - generic [ref=e341] [cursor=pointer]:
              - generic [ref=e342]: 
              - text: Add to cart
          - generic [ref=e343]:
            - heading "Rs. 359" [level=2] [ref=e344]
            - paragraph [ref=e345]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e346] [cursor=pointer]:
              - generic [ref=e347]: 
              - text: Add to cart
        - list [ref=e349]:
          - listitem [ref=e350]:
            - link " View Product" [ref=e351] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=e352]: 
              - text: View Product
      - generic [ref=e354]:
        - generic [ref=e355]:
          - generic [ref=e356]:
            - img "ecommerce website products" [ref=e357]
            - heading "Rs. 278" [level=2] [ref=e358]
            - paragraph [ref=e359]: Frozen Tops For Kids
            - generic [ref=e360] [cursor=pointer]:
              - generic [ref=e361]: 
              - text: Add to cart
          - generic [ref=e362]:
            - heading "Rs. 278" [level=2] [ref=e363]
            - paragraph [ref=e364]: Frozen Tops For Kids
            - generic [ref=e365] [cursor=pointer]:
              - generic [ref=e366]: 
              - text: Add to cart
        - list [ref=e368]:
          - listitem [ref=e369]:
            - link " View Product" [ref=e370] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=e371]: 
              - text: View Product
      - generic [ref=e373]:
        - generic [ref=e374]:
          - generic [ref=e375]:
            - img "ecommerce website products" [ref=e376]
            - heading "Rs. 679" [level=2] [ref=e377]
            - paragraph [ref=e378]:
              - text: Full Sleeves Top Cherry - Pink
              - link "People & Society" [ref=e379] [cursor=pointer]:
                - img [ref=e381]
                - text: People & Society
            - generic [ref=e383] [cursor=pointer]:
              - generic [ref=e384]: 
              - text: Add to cart
          - generic [ref=e385]:
            - heading "Rs. 679" [level=2] [ref=e386]
            - paragraph [ref=e387]: Full Sleeves Top Cherry - Pink
            - generic [ref=e388] [cursor=pointer]:
              - generic [ref=e389]: 
              - text: Add to cart
        - list [ref=e391]:
          - listitem [ref=e392]:
            - link " View Product" [ref=e393] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=e394]: 
              - text: View Product
      - generic [ref=e396]:
        - generic [ref=e397]:
          - generic [ref=e398]:
            - img "ecommerce website products" [ref=e399]
            - heading "Rs. 315" [level=2] [ref=e400]
            - paragraph [ref=e401]: Printed Off Shoulder Top - White
            - generic [ref=e402] [cursor=pointer]:
              - generic [ref=e403]: 
              - text: Add to cart
          - generic [ref=e404]:
            - heading "Rs. 315" [level=2] [ref=e405]
            - paragraph [ref=e406]: Printed Off Shoulder Top - White
            - generic [ref=e407] [cursor=pointer]:
              - generic [ref=e408]: 
              - text: Add to cart
        - list [ref=e410]:
          - listitem [ref=e411]:
            - link " View Product" [ref=e412] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=e413]: 
              - text: View Product
      - generic [ref=e415]:
        - generic [ref=e416]:
          - generic [ref=e417]:
            - img "ecommerce website products" [ref=e418]
            - heading "Rs. 478" [level=2] [ref=e419]
            - paragraph [ref=e420]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e421] [cursor=pointer]:
              - generic [ref=e422]: 
              - text: Add to cart
          - generic [ref=e423]:
            - heading "Rs. 478" [level=2] [ref=e424]
            - paragraph [ref=e425]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e426] [cursor=pointer]:
              - generic [ref=e427]: 
              - text: Add to cart
        - list [ref=e429]:
          - listitem [ref=e430]:
            - link " View Product" [ref=e431] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=e432]: 
              - text: View Product
      - generic [ref=e434]:
        - generic [ref=e435]:
          - generic [ref=e436]:
            - img "ecommerce website products" [ref=e437]
            - heading "Rs. 1200" [level=2] [ref=e438]
            - paragraph [ref=e439]: Little Girls Mr. Panda Shirt
            - generic [ref=e440] [cursor=pointer]:
              - generic [ref=e441]: 
              - text: Add to cart
          - generic [ref=e442]:
            - heading "Rs. 1200" [level=2] [ref=e443]
            - paragraph [ref=e444]: Little Girls Mr. Panda Shirt
            - generic [ref=e445] [cursor=pointer]:
              - generic [ref=e446]: 
              - text: Add to cart
        - list [ref=e448]:
          - listitem [ref=e449]:
            - link " View Product" [ref=e450] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=e451]: 
              - text: View Product
      - generic [ref=e453]:
        - generic [ref=e454]:
          - generic [ref=e455]:
            - img "ecommerce website products" [ref=e456]
            - heading "Rs. 1050" [level=2] [ref=e457]
            - paragraph [ref=e458]:
              - text: Sleeveless Unicorn Patch Gown - Pink
              - link "Colour Blocked Shirts" [ref=e459] [cursor=pointer]:
                - img [ref=e461]
                - text: Colour Blocked Shirts
            - generic [ref=e463] [cursor=pointer]:
              - generic [ref=e464]: 
              - text: Add to cart
          - generic [ref=e465]:
            - heading "Rs. 1050" [level=2] [ref=e466]
            - paragraph [ref=e467]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e468] [cursor=pointer]:
              - generic [ref=e469]: 
              - text: Add to cart
        - list [ref=e471]:
          - listitem [ref=e472]:
            - link " View Product" [ref=e473] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=e474]: 
              - text: View Product
      - generic [ref=e476]:
        - generic [ref=e477]:
          - generic [ref=e478]:
            - img "ecommerce website products" [ref=e479]
            - heading "Rs. 1190" [level=2] [ref=e480]
            - paragraph [ref=e481]: Cotton Mull Embroidered Dress
            - generic [ref=e482] [cursor=pointer]:
              - generic [ref=e483]: 
              - text: Add to cart
          - generic [ref=e484]:
            - heading "Rs. 1190" [level=2] [ref=e485]
            - paragraph [ref=e486]: Cotton Mull Embroidered Dress
            - generic [ref=e487] [cursor=pointer]:
              - generic [ref=e488]: 
              - text: Add to cart
        - list [ref=e490]:
          - listitem [ref=e491]:
            - link " View Product" [ref=e492] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=e493]: 
              - text: View Product
      - generic [ref=e495]:
        - generic [ref=e496]:
          - generic [ref=e497]:
            - img "ecommerce website products" [ref=e498]
            - heading "Rs. 1530" [level=2] [ref=e499]
            - paragraph [ref=e500]: Blue Cotton Indie Mickey Dress
            - generic [ref=e501] [cursor=pointer]:
              - generic [ref=e502]: 
              - text: Add to cart
          - generic [ref=e503]:
            - heading "Rs. 1530" [level=2] [ref=e504]
            - paragraph [ref=e505]: Blue Cotton Indie Mickey Dress
            - generic [ref=e506] [cursor=pointer]:
              - generic [ref=e507]: 
              - text: Add to cart
        - list [ref=e509]:
          - listitem [ref=e510]:
            - link " View Product" [ref=e511] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=e512]: 
              - text: View Product
      - generic [ref=e514]:
        - generic [ref=e515]:
          - generic [ref=e516]:
            - img "ecommerce website products" [ref=e517]
            - heading "Rs. 1600" [level=2] [ref=e518]
            - paragraph [ref=e519]:
              - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - link "Kookie Kids Clothing" [ref=e520] [cursor=pointer]:
                - img [ref=e522]
                - text: Kookie Kids Clothing
            - generic [ref=e524] [cursor=pointer]:
              - generic [ref=e525]: 
              - text: Add to cart
          - generic [ref=e526]:
            - heading "Rs. 1600" [level=2] [ref=e527]
            - paragraph [ref=e528]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e529] [cursor=pointer]:
              - generic [ref=e530]: 
              - text: Add to cart
        - list [ref=e532]:
          - listitem [ref=e533]:
            - link " View Product" [ref=e534] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=e535]: 
              - text: View Product
      - generic [ref=e537]:
        - generic [ref=e538]:
          - generic [ref=e539]:
            - img "ecommerce website products" [ref=e540]
            - heading "Rs. 1100" [level=2] [ref=e541]
            - paragraph [ref=e542]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e543] [cursor=pointer]:
              - generic [ref=e544]: 
              - text: Add to cart
          - generic [ref=e545]:
            - heading "Rs. 1100" [level=2] [ref=e546]
            - paragraph [ref=e547]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e548] [cursor=pointer]:
              - generic [ref=e549]: 
              - text: Add to cart
        - list [ref=e551]:
          - listitem [ref=e552]:
            - link " View Product" [ref=e553] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=e554]: 
              - text: View Product
      - generic [ref=e556]:
        - generic [ref=e557]:
          - generic [ref=e558]:
            - img "ecommerce website products" [ref=e559]
            - heading "Rs. 849" [level=2] [ref=e560]
            - paragraph [ref=e561]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e562] [cursor=pointer]:
              - generic [ref=e563]: 
              - text: Add to cart
          - generic [ref=e564]:
            - heading "Rs. 849" [level=2] [ref=e565]
            - paragraph [ref=e566]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e567] [cursor=pointer]:
              - generic [ref=e568]: 
              - text: Add to cart
        - list [ref=e570]:
          - listitem [ref=e571]:
            - link " View Product" [ref=e572] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=e573]: 
              - text: View Product
      - generic [ref=e575]:
        - generic [ref=e576]:
          - generic [ref=e577]:
            - img "ecommerce website products" [ref=e578]
            - heading "Rs. 1299" [level=2] [ref=e579]
            - paragraph [ref=e580]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e581] [cursor=pointer]:
              - generic [ref=e582]: 
              - text: Add to cart
          - generic [ref=e583]:
            - heading "Rs. 1299" [level=2] [ref=e584]
            - paragraph [ref=e585]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e586] [cursor=pointer]:
              - generic [ref=e587]: 
              - text: Add to cart
        - list [ref=e589]:
          - listitem [ref=e590]:
            - link " View Product" [ref=e591] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=e592]: 
              - text: View Product
      - generic [ref=e594]:
        - generic [ref=e595]:
          - generic [ref=e596]:
            - img "ecommerce website products" [ref=e597]
            - heading "Rs. 1000" [level=2] [ref=e598]
            - paragraph [ref=e599]: Green Side Placket Detail T-Shirt
            - generic [ref=e600] [cursor=pointer]:
              - generic [ref=e601]: 
              - text: Add to cart
          - generic [ref=e602]:
            - heading "Rs. 1000" [level=2] [ref=e603]
            - paragraph [ref=e604]: Green Side Placket Detail T-Shirt
            - generic [ref=e605] [cursor=pointer]:
              - generic [ref=e606]: 
              - text: Add to cart
        - list [ref=e608]:
          - listitem [ref=e609]:
            - link " View Product" [ref=e610] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=e611]: 
              - text: View Product
      - generic [ref=e613]:
        - generic [ref=e614]:
          - generic [ref=e615]:
            - img "ecommerce website products" [ref=e616]
            - heading "Rs. 1500" [level=2] [ref=e617]
            - paragraph [ref=e618]: Premium Polo T-Shirts
            - generic [ref=e619] [cursor=pointer]:
              - generic [ref=e620]: 
              - text: Add to cart
          - generic [ref=e621]:
            - heading "Rs. 1500" [level=2] [ref=e622]
            - paragraph [ref=e623]: Premium Polo T-Shirts
            - generic [ref=e624] [cursor=pointer]:
              - generic [ref=e625]: 
              - text: Add to cart
        - list [ref=e627]:
          - listitem [ref=e628]:
            - link " View Product" [ref=e629] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=e630]: 
              - text: View Product
      - generic [ref=e632]:
        - generic [ref=e633]:
          - generic [ref=e634]:
            - img "ecommerce website products" [ref=e635]
            - heading "Rs. 850" [level=2] [ref=e636]
            - paragraph [ref=e637]: Pure Cotton Neon Green Tshirt
            - generic [ref=e638] [cursor=pointer]:
              - generic [ref=e639]: 
              - text: Add to cart
          - generic [ref=e640]:
            - heading "Rs. 850" [level=2] [ref=e641]
            - paragraph [ref=e642]: Pure Cotton Neon Green Tshirt
            - generic [ref=e643] [cursor=pointer]:
              - generic [ref=e644]: 
              - text: Add to cart
        - list [ref=e646]:
          - listitem [ref=e647]:
            - link " View Product" [ref=e648] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=e649]: 
              - text: View Product
      - generic [ref=e651]:
        - generic [ref=e652]:
          - generic [ref=e653]:
            - img "ecommerce website products" [ref=e654]
            - heading "Rs. 799" [level=2] [ref=e655]
            - paragraph [ref=e656]: Soft Stretch Jeans
            - generic [ref=e657] [cursor=pointer]:
              - generic [ref=e658]: 
              - text: Add to cart
          - generic [ref=e659]:
            - heading "Rs. 799" [level=2] [ref=e660]
            - paragraph [ref=e661]: Soft Stretch Jeans
            - generic [ref=e662] [cursor=pointer]:
              - generic [ref=e663]: 
              - text: Add to cart
        - list [ref=e665]:
          - listitem [ref=e666]:
            - link " View Product" [ref=e667] [cursor=pointer]:
              - /url: /product_details/33
              - generic [ref=e668]: 
              - text: View Product
      - generic [ref=e670]:
        - generic [ref=e671]:
          - generic [ref=e672]:
            - img "ecommerce website products"
            - heading "Rs. 1200" [level=2] [ref=e673]
            - paragraph [ref=e674]: Regular Fit Straight Jeans
            - generic [ref=e675] [cursor=pointer]:
              - generic [ref=e676]: 
              - text: Add to cart
          - generic [ref=e677]:
            - heading "Rs. 1200" [level=2] [ref=e678]
            - paragraph [ref=e679]: Regular Fit Straight Jeans
            - generic [ref=e680] [cursor=pointer]:
              - generic [ref=e681]: 
              - text: Add to cart
        - list [ref=e683]:
          - listitem [ref=e684]:
            - link " View Product" [ref=e685] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=e686]: 
              - text: View Product
      - generic [ref=e688]:
        - generic [ref=e689]:
          - generic [ref=e690]:
            - img "ecommerce website products" [ref=e691]
            - heading "Rs. 1400" [level=2] [ref=e692]
            - paragraph [ref=e693]: Grunt Blue Slim Fit Jeans
            - generic [ref=e694] [cursor=pointer]:
              - generic [ref=e695]: 
              - text: Add to cart
          - generic [ref=e696]:
            - heading "Rs. 1400" [level=2] [ref=e697]
            - paragraph [ref=e698]: Grunt Blue Slim Fit Jeans
            - generic [ref=e699] [cursor=pointer]:
              - generic [ref=e700]: 
              - text: Add to cart
        - list [ref=e702]:
          - listitem [ref=e703]:
            - link " View Product" [ref=e704] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=e705]: 
              - text: View Product
      - generic [ref=e707]:
        - generic [ref=e708]:
          - generic [ref=e709]:
            - img "ecommerce website products" [ref=e710]
            - heading "Rs. 2300" [level=2] [ref=e711]
            - paragraph [ref=e712]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e713] [cursor=pointer]:
              - generic [ref=e714]: 
              - text: Add to cart
          - generic [ref=e715]:
            - heading "Rs. 2300" [level=2] [ref=e716]
            - paragraph [ref=e717]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e718] [cursor=pointer]:
              - generic [ref=e719]: 
              - text: Add to cart
        - list [ref=e721]:
          - listitem [ref=e722]:
            - link " View Product" [ref=e723] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=e724]: 
              - text: View Product
      - generic [ref=e726]:
        - generic [ref=e727]:
          - generic [ref=e728]:
            - img "ecommerce website products" [ref=e729]
            - heading "Rs. 3000" [level=2] [ref=e730]
            - paragraph [ref=e731]: Cotton Silk Hand Block Print Saree
            - generic [ref=e732] [cursor=pointer]:
              - generic [ref=e733]: 
              - text: Add to cart
          - generic [ref=e734]:
            - heading "Rs. 3000" [level=2] [ref=e735]
            - paragraph [ref=e736]: Cotton Silk Hand Block Print Saree
            - generic [ref=e737] [cursor=pointer]:
              - generic [ref=e738]: 
              - text: Add to cart
        - list [ref=e740]:
          - listitem [ref=e741]:
            - link " View Product" [ref=e742] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=e743]: 
              - text: View Product
      - generic [ref=e745]:
        - generic [ref=e746]:
          - generic [ref=e747]:
            - img "ecommerce website products" [ref=e748]
            - heading "Rs. 3500" [level=2] [ref=e749]
            - paragraph [ref=e750]: Rust Red Linen Saree
            - generic [ref=e751] [cursor=pointer]:
              - generic [ref=e752]: 
              - text: Add to cart
          - generic [ref=e753]:
            - heading "Rs. 3500" [level=2] [ref=e754]
            - paragraph [ref=e755]: Rust Red Linen Saree
            - generic [ref=e756] [cursor=pointer]:
              - generic [ref=e757]: 
              - text: Add to cart
        - list [ref=e759]:
          - listitem [ref=e760]:
            - link " View Product" [ref=e761] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=e762]: 
              - text: View Product
      - generic [ref=e764]:
        - generic [ref=e765]:
          - generic [ref=e766]:
            - img "ecommerce website products" [ref=e767]
            - heading "Rs. 5000" [level=2] [ref=e768]
            - paragraph [ref=e769]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e770] [cursor=pointer]:
              - generic [ref=e771]: 
              - text: Add to cart
          - generic [ref=e772]:
            - heading "Rs. 5000" [level=2] [ref=e773]
            - paragraph [ref=e774]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e775] [cursor=pointer]:
              - generic [ref=e776]: 
              - text: Add to cart
        - list [ref=e778]:
          - listitem [ref=e779]:
            - link " View Product" [ref=e780] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=e781]: 
              - text: View Product
      - generic [ref=e783]:
        - generic [ref=e784]:
          - generic [ref=e785]:
            - img "ecommerce website products" [ref=e786]
            - heading "Rs. 1400" [level=2] [ref=e787]
            - paragraph [ref=e788]: Lace Top For Women
            - generic [ref=e789] [cursor=pointer]:
              - generic [ref=e790]: 
              - text: Add to cart
          - generic [ref=e791]:
            - heading "Rs. 1400" [level=2] [ref=e792]
            - paragraph [ref=e793]: Lace Top For Women
            - generic [ref=e794] [cursor=pointer]:
              - generic [ref=e795]: 
              - text: Add to cart
        - list [ref=e797]:
          - listitem [ref=e798]:
            - link " View Product" [ref=e799] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=e800]: 
              - text: View Product
      - generic [ref=e802]:
        - generic [ref=e803]:
          - generic [ref=e804]:
            - img "ecommerce website products" [ref=e805]
            - heading "Rs. 1389" [level=2] [ref=e806]
            - paragraph [ref=e807]:
              - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - link "Polo Shirts" [ref=e808] [cursor=pointer]:
                - img [ref=e810]
                - text: Polo Shirts
            - generic [ref=e812] [cursor=pointer]:
              - generic [ref=e813]: 
              - text: Add to cart
          - generic [ref=e814]:
            - heading "Rs. 1389" [level=2] [ref=e815]
            - paragraph [ref=e816]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e817] [cursor=pointer]:
              - generic [ref=e818]: 
              - text: Add to cart
        - list [ref=e820]:
          - listitem [ref=e821]:
            - link " View Product" [ref=e822] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=e823]: 
              - text: View Product
  - insertion [ref=e825]
  - contentinfo [ref=e827]:
    - generic [ref=e832]:
      - heading "Subscription" [level=2] [ref=e833]
      - generic [ref=e834]:
        - textbox "Your email address" [ref=e835]
        - button "" [ref=e836] [cursor=pointer]:
          - generic [ref=e837]: 
        - paragraph [ref=e838]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e842]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e843]:
    - iframe [ref=e846]:
      - generic [ref=f8e3]:
        - button [ref=f8e4]:
          - img [ref=f8e5]
        - generic [ref=f8e7]:
          - generic [ref=f8e9]:
            - generic [ref=f8e13]:
              - generic:
                - generic:
                  - generic:
                    - button "Pause video":
                      - img
              - button "Unmute video" [ref=f8e15] [cursor=pointer]
            - button "Replay" [ref=f8e23]:
              - img [ref=f8e25] [cursor=pointer]
            - img [ref=f8e30]
          - button "Learn more" [ref=f8e37] [cursor=pointer]
  - generic [ref=e847]:
    - generic [ref=e848] [cursor=pointer]:
      - img [ref=e850]
      - link "Go to shopping options for Printed T-shirts" [ref=e852]: Printed T-shirts
    - button "Close shopping anchor" [ref=e853]
```

# Test source

```ts
  84  |     if (await addToCart.count() > 0) {
  85  |       await addToCart.first().click();
  86  |       await page.waitForTimeout(500);
  87  |       
  88  |       // Navigate away
  89  |       await page.goto('https://automationexercise.com/contact_us');
  90  |       await page.waitForTimeout(500);
  91  |       
  92  |       // Navigate back to cart
  93  |       const cartLink = page.locator('a[href="/view_cart"]').first();
  94  |       await cartLink.click();
  95  |       
  96  |       // Verify product still in cart
  97  |       const cartItems = page.locator('tr[id^="cart_item"]');
  98  |       expect(await cartItems.count()).toBeGreaterThan(0);
  99  |     }
  100 |   });
  101 | 
  102 |   test.fixme('Cart update quantity with keyboard input', async ({ page }) => {
  103 |     // Add product
  104 |     await page.goto('https://automationexercise.com/product_details/1');
  105 |     
  106 |     const quantityInput = page.locator('input[type="number"]');
  107 |     await quantityInput.clear();
  108 |     await quantityInput.type('5');
  109 |     
  110 |     const addButton = page.locator('button:has-text("Add to cart")');
  111 |     await addButton.click();
  112 |     await page.waitForTimeout(500);
  113 |     
  114 |     // Navigate to cart
  115 |     const cartLink = page.locator('a[href="/view_cart"]').first();
  116 |     await cartLink.click();
  117 |     
  118 |     // Verify quantity
  119 |     await expect(page).toHaveTitle(/Checkout/);
  120 |   });
  121 | 
  122 |   test.fixme('Cart shows subtotal and total separately', async ({ page }) => {
  123 |     // Add product
  124 |     await page.goto('https://automationexercise.com/product_details/1');
  125 |     
  126 |     const addButton = page.locator('button:has-text("Add to cart")');
  127 |     await addButton.click();
  128 |     await page.waitForTimeout(500);
  129 |     
  130 |     // Go to cart
  131 |     const cartLink = page.locator('a[href="/view_cart"]').first();
  132 |     await cartLink.click();
  133 |     
  134 |     // Verify both subtotal and total are shown
  135 |     const totalElements = page.locator('text=/Total|total|subtotal/i');
  136 |     expect(await totalElements.count()).toBeGreaterThanOrEqual(1);
  137 |   });
  138 | });
  139 | 
  140 | test.describe('Advanced Navigation Features', () => {
  141 |   test('Keyboard navigation - Tab through form', async ({ page }) => {
  142 |     await page.goto('https://automationexercise.com/contact_us');
  143 |     
  144 |     // Tab through form fields
  145 |     const nameInput = page.locator('input[name="name"], input[placeholder="Name"]');
  146 |     await nameInput.focus();
  147 |     await nameInput.fill('Test User');
  148 |     
  149 |     // Tab to next field
  150 |     await page.keyboard.press('Tab');
  151 |     
  152 |     const emailInput = page.locator('input[name="email"], input[placeholder="Email"]');
  153 |     const isFocused = await emailInput.evaluate(el => el === document.activeElement);
  154 |     
  155 |     // Should be focused or close to it
  156 |     expect(isFocused).toBeDefined();
  157 |   });
  158 | 
  159 |   test('Mobile viewport navigation', async ({ page }) => {
  160 |     // Set mobile viewport
  161 |     await page.setViewportSize({ width: 375, height: 667 });
  162 |     
  163 |     await page.goto('https://automationexercise.com/');
  164 |     
  165 |     // Navigation should be accessible
  166 |     const homeLink = page.locator('a:has-text("Home")');
  167 |     await expect(homeLink).toBeVisible();
  168 |   });
  169 | 
  170 |   test('Tablet viewport navigation', async ({ page }) => {
  171 |     // Set tablet viewport
  172 |     await page.setViewportSize({ width: 768, height: 1024 });
  173 |     
  174 |     await page.goto('https://automationexercise.com/');
  175 |     
  176 |     // Navigation should adapt
  177 |     const productsLink = page.locator('a:has-text("Products")');
  178 |     await expect(productsLink).toBeVisible();
  179 |   });
  180 | });
  181 | 
  182 | test.describe('Advanced Search Features', () => {
  183 |   test('Search is case-insensitive', async ({ page }) => {
> 184 |     await page.goto('https://automationexercise.com/products');
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  185 |     
  186 |     // Search with uppercase
  187 |     let searchBox = page.locator('input[placeholder="Search Product"]');
  188 |     await searchBox.fill('TOP');
  189 |     
  190 |     let searchButton = page.locator('button[type="submit"]').first();
  191 |     await searchButton.click();
  192 |     await page.waitForTimeout(1000);
  193 |     
  194 |     let results1 = await page.locator('[class*="productinfo"]').count();
  195 |     
  196 |     // Search with lowercase
  197 |     await page.goto('https://automationexercise.com/products');
  198 |     
  199 |     searchBox = page.locator('input[placeholder="Search Product"]');
  200 |     await searchBox.fill('top');
  201 |     
  202 |     searchButton = page.locator('button[type="submit"]').first();
  203 |     await searchButton.click();
  204 |     await page.waitForTimeout(1000);
  205 |     
  206 |     let results2 = await page.locator('[class*="productinfo"]').count();
  207 |     
  208 |     // Should return same results
  209 |     expect(results1).toBe(results2);
  210 |   });
  211 | 
  212 |   test('Search with partial product name', async ({ page }) => {
  213 |     await page.goto('https://automationexercise.com/products');
  214 |     
  215 |     // Search with partial name
  216 |     const searchBox = page.locator('input[placeholder="Search Product"]');
  217 |     await searchBox.fill('Op');
  218 |     
  219 |     const searchButton = page.locator('button[type="submit"]').first();
  220 |     await searchButton.click();
  221 |     
  222 |     await page.waitForTimeout(1000);
  223 |     
  224 |     // Should return matching products
  225 |     const results = page.locator('[class*="productinfo"]');
  226 |     expect(await results.count()).toBeGreaterThanOrEqual(0);
  227 |   });
  228 | });
  229 | 
```