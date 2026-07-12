# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance\page-performance.spec.js >> Page Load and Performance >> Homepage loads within acceptable time
- Location: tests\performance\page-performance.spec.js:7:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link "Test Cases" [ref=e51]:
            - /url: /test_cases
            - button "Test Cases" [ref=e52] [cursor=pointer]
          - link "APIs list for practice" [ref=e53]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e54] [cursor=pointer]
        - img "demo website for practice" [ref=e56]
      - generic [ref=e57]:
        - generic [ref=e58]:
          - heading "AutomationExercise" [level=1] [ref=e59]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e60]
          - paragraph [ref=e61]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link "Test Cases" [ref=e62]:
            - /url: /test_cases
            - button "Test Cases" [ref=e63] [cursor=pointer]
          - link "APIs list for practice" [ref=e64]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e65] [cursor=pointer]
        - img "demo website for practice" [ref=e67]
    - link "" [ref=e68]:
      - /url: "#slider-carousel"
      - generic [ref=e69]: 
    - link "" [ref=e70]:
      - /url: "#slider-carousel"
      - generic [ref=e71]: 
  - generic [ref=e74]:
    - generic [ref=e76]:
      - heading "Category" [level=2] [ref=e77]
      - generic [ref=e78]:
        - heading " Women" [level=4] [ref=e81]:
          - link " Women" [ref=e82]:
            - /url: "#Women"
            - generic [ref=e84]: 
            - text: Women
        - heading " Men" [level=4] [ref=e87]:
          - link " Men" [ref=e88]:
            - /url: "#Men"
            - generic [ref=e90]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e93]:
          - link " Kids" [ref=e94]:
            - /url: "#Kids"
            - generic [ref=e96]: 
            - text: Kids
      - insertion [ref=e98]:
        - generic [ref=e101]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e103]: Discover more
          - link "Test case management" [ref=e104] [cursor=pointer]:
            - generic "Test case management" [ref=e105]
            - img [ref=e107]
          - link "Quality Control & Tracking" [ref=e109] [cursor=pointer]:
            - generic "Quality Control & Tracking" [ref=e110]
            - img [ref=e112]
          - link "Programming" [ref=e114] [cursor=pointer]:
            - generic "Programming" [ref=e115]
            - img [ref=e117]
          - link "T SHIRT" [ref=e119] [cursor=pointer]:
            - generic "T SHIRT" [ref=e120]
            - img [ref=e122]
          - link "Factory Automation" [ref=e124] [cursor=pointer]:
            - generic "Factory Automation" [ref=e125]
            - img [ref=e127]
          - link "Jeans" [ref=e129] [cursor=pointer]:
            - generic "Jeans" [ref=e130]
            - img [ref=e132]
          - link "Test case templates" [ref=e134] [cursor=pointer]:
            - generic "Test case templates" [ref=e135]
            - img [ref=e137]
          - link "Test case writing" [ref=e139] [cursor=pointer]:
            - generic "Test case writing" [ref=e140]
            - img [ref=e142]
      - generic [ref=e144]:
        - heading "Brands" [level=2] [ref=e145]
        - list [ref=e147]:
          - listitem [ref=e148]:
            - link "(6) Polo" [ref=e149]:
              - /url: /brand_products/Polo
              - generic [ref=e150]: (6)
              - text: Polo
          - listitem [ref=e151]:
            - link "(5) H&M" [ref=e152]:
              - /url: /brand_products/H&M
              - generic [ref=e153]: (5)
              - text: H&M
          - listitem [ref=e154]:
            - link "(5) Madame" [ref=e155]:
              - /url: /brand_products/Madame
              - generic [ref=e156]: (5)
              - text: Madame
          - listitem [ref=e157]:
            - link "(3) Mast & Harbour" [ref=e158]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e159]: (3)
              - text: Mast & Harbour
          - listitem [ref=e160]:
            - link "(4) Babyhug" [ref=e161]:
              - /url: /brand_products/Babyhug
              - generic [ref=e162]: (4)
              - text: Babyhug
          - listitem [ref=e163]:
            - link "(3) Allen Solly Junior" [ref=e164]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e165]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e166]:
            - link "(3) Kookie Kids" [ref=e167]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e168]: (3)
              - text: Kookie Kids
          - listitem [ref=e169]:
            - link "(5) Biba" [ref=e170]:
              - /url: /brand_products/Biba
              - generic [ref=e171]: (5)
              - text: Biba
    - generic [ref=e172]:
      - generic [ref=e173]:
        - heading "Features Items" [level=2] [ref=e174]
        - generic [ref=e176]:
          - generic [ref=e177]:
            - generic [ref=e178]:
              - img "ecommerce website products" [ref=e179]
              - heading "Rs. 500" [level=2] [ref=e180]
              - paragraph [ref=e181]: Blue Top
              - generic [ref=e182] [cursor=pointer]:
                - generic [ref=e183]: 
                - text: Add to cart
            - generic [ref=e184]:
              - heading "Rs. 500" [level=2] [ref=e185]
              - paragraph [ref=e186]: Blue Top
              - generic [ref=e187] [cursor=pointer]:
                - generic [ref=e188]: 
                - text: Add to cart
          - list [ref=e190]:
            - listitem [ref=e191]:
              - link " View Product" [ref=e192]:
                - /url: /product_details/1
                - generic [ref=e193]: 
                - text: View Product
        - generic [ref=e195]:
          - generic [ref=e196]:
            - generic [ref=e197]:
              - img "ecommerce website products" [ref=e198]
              - heading "Rs. 400" [level=2] [ref=e199]
              - paragraph [ref=e200]:
                - text: Men
                - link "Tshirt" [ref=e201] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e202]
                  - text: Tshirt
              - generic [ref=e204] [cursor=pointer]:
                - generic [ref=e205]: 
                - text: Add to cart
            - generic [ref=e206]:
              - heading "Rs. 400" [level=2] [ref=e207]
              - paragraph [ref=e208]: Men Tshirt
              - generic [ref=e209] [cursor=pointer]:
                - generic [ref=e210]: 
                - text: Add to cart
          - list [ref=e212]:
            - listitem [ref=e213]:
              - link " View Product" [ref=e214]:
                - /url: /product_details/2
                - generic [ref=e215]: 
                - text: View Product
        - generic [ref=e217]:
          - generic [ref=e218]:
            - generic [ref=e219]:
              - img "ecommerce website products" [ref=e220]
              - heading "Rs. 1000" [level=2] [ref=e221]
              - paragraph [ref=e222]:
                - text: Sleeveless
                - link "Dress" [ref=e223] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e224]
                  - text: Dress
              - generic [ref=e226] [cursor=pointer]:
                - generic [ref=e227]: 
                - text: Add to cart
            - generic [ref=e228]:
              - heading "Rs. 1000" [level=2] [ref=e229]
              - paragraph [ref=e230]: Sleeveless Dress
              - generic [ref=e231] [cursor=pointer]:
                - generic [ref=e232]: 
                - text: Add to cart
          - list [ref=e234]:
            - listitem [ref=e235]:
              - link " View Product" [ref=e236]:
                - /url: /product_details/3
                - generic [ref=e237]: 
                - text: View Product
        - generic [ref=e239]:
          - generic [ref=e240]:
            - generic [ref=e241]:
              - img "ecommerce website products" [ref=e242]
              - heading "Rs. 1500" [level=2] [ref=e243]
              - paragraph [ref=e244]: Stylish Dress
              - generic [ref=e245] [cursor=pointer]:
                - generic [ref=e246]: 
                - text: Add to cart
            - generic [ref=e247]:
              - heading "Rs. 1500" [level=2] [ref=e248]
              - paragraph [ref=e249]: Stylish Dress
              - generic [ref=e250] [cursor=pointer]:
                - generic [ref=e251]: 
                - text: Add to cart
          - list [ref=e253]:
            - listitem [ref=e254]:
              - link " View Product" [ref=e255]:
                - /url: /product_details/4
                - generic [ref=e256]: 
                - text: View Product
        - generic [ref=e258]:
          - generic [ref=e259]:
            - generic [ref=e260]:
              - img "ecommerce website products" [ref=e261]
              - heading "Rs. 600" [level=2] [ref=e262]
              - paragraph [ref=e263]: Winter Top
              - generic [ref=e264] [cursor=pointer]:
                - generic [ref=e265]: 
                - text: Add to cart
            - generic [ref=e266]:
              - heading "Rs. 600" [level=2] [ref=e267]
              - paragraph [ref=e268]: Winter Top
              - generic [ref=e269] [cursor=pointer]:
                - generic [ref=e270]: 
                - text: Add to cart
          - list [ref=e272]:
            - listitem [ref=e273]:
              - link " View Product" [ref=e274]:
                - /url: /product_details/5
                - generic [ref=e275]: 
                - text: View Product
        - generic [ref=e277]:
          - generic [ref=e278]:
            - generic [ref=e279]:
              - img "ecommerce website products" [ref=e280]
              - heading "Rs. 400" [level=2] [ref=e281]
              - paragraph [ref=e282]: Summer White Top
              - generic [ref=e283] [cursor=pointer]:
                - generic [ref=e284]: 
                - text: Add to cart
            - generic [ref=e285]:
              - heading "Rs. 400" [level=2] [ref=e286]
              - paragraph [ref=e287]: Summer White Top
              - generic [ref=e288] [cursor=pointer]:
                - generic [ref=e289]: 
                - text: Add to cart
          - list [ref=e291]:
            - listitem [ref=e292]:
              - link " View Product" [ref=e293]:
                - /url: /product_details/6
                - generic [ref=e294]: 
                - text: View Product
        - generic [ref=e296]:
          - generic [ref=e297]:
            - generic [ref=e298]:
              - img "ecommerce website products" [ref=e299]
              - heading "Rs. 1000" [level=2] [ref=e300]
              - paragraph [ref=e301]: Madame Top For Women
              - generic [ref=e302] [cursor=pointer]:
                - generic [ref=e303]: 
                - text: Add to cart
            - generic [ref=e304]:
              - heading "Rs. 1000" [level=2] [ref=e305]
              - paragraph [ref=e306]: Madame Top For Women
              - generic [ref=e307] [cursor=pointer]:
                - generic [ref=e308]: 
                - text: Add to cart
          - list [ref=e310]:
            - listitem [ref=e311]:
              - link " View Product" [ref=e312]:
                - /url: /product_details/7
                - generic [ref=e313]: 
                - text: View Product
        - generic [ref=e315]:
          - generic [ref=e316]:
            - generic [ref=e317]:
              - img "ecommerce website products" [ref=e318]
              - heading "Rs. 700" [level=2] [ref=e319]
              - paragraph [ref=e320]: Fancy Green Top
              - generic [ref=e321] [cursor=pointer]:
                - generic [ref=e322]: 
                - text: Add to cart
            - generic [ref=e323]:
              - heading "Rs. 700" [level=2] [ref=e324]
              - paragraph [ref=e325]: Fancy Green Top
              - generic [ref=e326] [cursor=pointer]:
                - generic [ref=e327]: 
                - text: Add to cart
          - list [ref=e329]:
            - listitem [ref=e330]:
              - link " View Product" [ref=e331]:
                - /url: /product_details/8
                - generic [ref=e332]: 
                - text: View Product
        - generic [ref=e334]:
          - generic [ref=e335]:
            - generic [ref=e336]:
              - img "ecommerce website products" [ref=e337]
              - heading "Rs. 499" [level=2] [ref=e338]
              - paragraph [ref=e339]:
                - text: Sleeves Printed Top - White
                - link "Internet & Telecom" [ref=e340] [cursor=pointer]:
                  - img [ref=e342]
                  - text: Internet & Telecom
              - generic [ref=e344] [cursor=pointer]:
                - generic [ref=e345]: 
                - text: Add to cart
            - generic [ref=e346]:
              - heading "Rs. 499" [level=2] [ref=e347]
              - paragraph [ref=e348]: Sleeves Printed Top - White
              - generic [ref=e349] [cursor=pointer]:
                - generic [ref=e350]: 
                - text: Add to cart
          - list [ref=e352]:
            - listitem [ref=e353]:
              - link " View Product" [ref=e354]:
                - /url: /product_details/11
                - generic [ref=e355]: 
                - text: View Product
        - generic [ref=e357]:
          - generic [ref=e358]:
            - generic [ref=e359]:
              - img "ecommerce website products" [ref=e360]
              - heading "Rs. 359" [level=2] [ref=e361]
              - paragraph [ref=e362]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link "QA certification programs" [ref=e363] [cursor=pointer]:
                  - img [ref=e365]
                  - text: QA certification programs
              - generic [ref=e367] [cursor=pointer]:
                - generic [ref=e368]: 
                - text: Add to cart
            - generic [ref=e369]:
              - heading "Rs. 359" [level=2] [ref=e370]
              - paragraph [ref=e371]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e372] [cursor=pointer]:
                - generic [ref=e373]: 
                - text: Add to cart
          - list [ref=e375]:
            - listitem [ref=e376]:
              - link " View Product" [ref=e377]:
                - /url: /product_details/12
                - generic [ref=e378]: 
                - text: View Product
        - generic [ref=e380]:
          - generic [ref=e381]:
            - generic [ref=e382]:
              - img "ecommerce website products" [ref=e383]
              - heading "Rs. 278" [level=2] [ref=e384]
              - paragraph [ref=e385]: Frozen Tops For Kids
              - generic [ref=e386] [cursor=pointer]:
                - generic [ref=e387]: 
                - text: Add to cart
            - generic [ref=e388]:
              - heading "Rs. 278" [level=2] [ref=e389]
              - paragraph [ref=e390]: Frozen Tops For Kids
              - generic [ref=e391] [cursor=pointer]:
                - generic [ref=e392]: 
                - text: Add to cart
          - list [ref=e394]:
            - listitem [ref=e395]:
              - link " View Product" [ref=e396]:
                - /url: /product_details/13
                - generic [ref=e397]: 
                - text: View Product
        - generic [ref=e399]:
          - generic [ref=e400]:
            - generic [ref=e401]:
              - img "ecommerce website products" [ref=e402]
              - heading "Rs. 679" [level=2] [ref=e403]
              - paragraph [ref=e404]:
                - text: Full Sleeves Top Cherry - Pink
                - link "Software" [ref=e405] [cursor=pointer]:
                  - img [ref=e407]
                  - text: Software
              - generic [ref=e409] [cursor=pointer]:
                - generic [ref=e410]: 
                - text: Add to cart
            - generic [ref=e411]:
              - heading "Rs. 679" [level=2] [ref=e412]
              - paragraph [ref=e413]: Full Sleeves Top Cherry - Pink
              - generic [ref=e414] [cursor=pointer]:
                - generic [ref=e415]: 
                - text: Add to cart
          - list [ref=e417]:
            - listitem [ref=e418]:
              - link " View Product" [ref=e419]:
                - /url: /product_details/14
                - generic [ref=e420]: 
                - text: View Product
        - generic [ref=e422]:
          - generic [ref=e423]:
            - generic [ref=e424]:
              - img "ecommerce website products" [ref=e425]
              - heading "Rs. 315" [level=2] [ref=e426]
              - paragraph [ref=e427]: Printed Off Shoulder Top - White
              - generic [ref=e428] [cursor=pointer]:
                - generic [ref=e429]: 
                - text: Add to cart
            - generic [ref=e430]:
              - heading "Rs. 315" [level=2] [ref=e431]
              - paragraph [ref=e432]: Printed Off Shoulder Top - White
              - generic [ref=e433] [cursor=pointer]:
                - generic [ref=e434]: 
                - text: Add to cart
          - list [ref=e436]:
            - listitem [ref=e437]:
              - link " View Product" [ref=e438]:
                - /url: /product_details/15
                - generic [ref=e439]: 
                - text: View Product
        - generic [ref=e441]:
          - generic [ref=e442]:
            - generic [ref=e443]:
              - img "ecommerce website products" [ref=e444]
              - heading "Rs. 478" [level=2] [ref=e445]
              - paragraph [ref=e446]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e447] [cursor=pointer]:
                - generic [ref=e448]: 
                - text: Add to cart
            - generic [ref=e449]:
              - heading "Rs. 478" [level=2] [ref=e450]
              - paragraph [ref=e451]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e452] [cursor=pointer]:
                - generic [ref=e453]: 
                - text: Add to cart
          - list [ref=e455]:
            - listitem [ref=e456]:
              - link " View Product" [ref=e457]:
                - /url: /product_details/16
                - generic [ref=e458]: 
                - text: View Product
        - generic [ref=e460]:
          - generic [ref=e461]:
            - generic [ref=e462]:
              - img "ecommerce website products" [ref=e463]
              - heading "Rs. 1200" [level=2] [ref=e464]
              - paragraph [ref=e465]: Little Girls Mr. Panda Shirt
              - generic [ref=e466] [cursor=pointer]:
                - generic [ref=e467]: 
                - text: Add to cart
            - generic [ref=e468]:
              - heading "Rs. 1200" [level=2] [ref=e469]
              - paragraph [ref=e470]: Little Girls Mr. Panda Shirt
              - generic [ref=e471] [cursor=pointer]:
                - generic [ref=e472]: 
                - text: Add to cart
          - list [ref=e474]:
            - listitem [ref=e475]:
              - link " View Product" [ref=e476]:
                - /url: /product_details/18
                - generic [ref=e477]: 
                - text: View Product
        - generic [ref=e479]:
          - generic [ref=e480]:
            - generic [ref=e481]:
              - img "ecommerce website products" [ref=e482]
              - heading "Rs. 1050" [level=2] [ref=e483]
              - paragraph [ref=e484]:
                - text: Sleeveless Unicorn Patch Gown - Pink
                - link "T-Shirts" [ref=e485] [cursor=pointer]:
                  - img [ref=e487]
                  - text: T-Shirts
              - generic [ref=e489] [cursor=pointer]:
                - generic [ref=e490]: 
                - text: Add to cart
            - generic [ref=e491]:
              - heading "Rs. 1050" [level=2] [ref=e492]
              - paragraph [ref=e493]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e494] [cursor=pointer]:
                - generic [ref=e495]: 
                - text: Add to cart
          - list [ref=e497]:
            - listitem [ref=e498]:
              - link " View Product" [ref=e499]:
                - /url: /product_details/19
                - generic [ref=e500]: 
                - text: View Product
        - generic [ref=e502]:
          - generic [ref=e503]:
            - generic [ref=e504]:
              - img "ecommerce website products" [ref=e505]
              - heading "Rs. 1190" [level=2] [ref=e506]
              - paragraph [ref=e507]: Cotton Mull Embroidered Dress
              - generic [ref=e508] [cursor=pointer]:
                - generic [ref=e509]: 
                - text: Add to cart
            - generic [ref=e510]:
              - heading "Rs. 1190" [level=2] [ref=e511]
              - paragraph [ref=e512]: Cotton Mull Embroidered Dress
              - generic [ref=e513] [cursor=pointer]:
                - generic [ref=e514]: 
                - text: Add to cart
          - list [ref=e516]:
            - listitem [ref=e517]:
              - link " View Product" [ref=e518]:
                - /url: /product_details/20
                - generic [ref=e519]: 
                - text: View Product
        - generic [ref=e521]:
          - generic [ref=e522]:
            - generic [ref=e523]:
              - img "ecommerce website products" [ref=e524]
              - heading "Rs. 1530" [level=2] [ref=e525]
              - paragraph [ref=e526]: Blue Cotton Indie Mickey Dress
              - generic [ref=e527] [cursor=pointer]:
                - generic [ref=e528]: 
                - text: Add to cart
            - generic [ref=e529]:
              - heading "Rs. 1530" [level=2] [ref=e530]
              - paragraph [ref=e531]: Blue Cotton Indie Mickey Dress
              - generic [ref=e532] [cursor=pointer]:
                - generic [ref=e533]: 
                - text: Add to cart
          - list [ref=e535]:
            - listitem [ref=e536]:
              - link " View Product" [ref=e537]:
                - /url: /product_details/21
                - generic [ref=e538]: 
                - text: View Product
        - generic [ref=e540]:
          - generic [ref=e541]:
            - generic [ref=e542]:
              - img "ecommerce website products" [ref=e543]
              - heading "Rs. 1600" [level=2] [ref=e544]
              - paragraph [ref=e545]:
                - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
                - link "Dresses" [ref=e546] [cursor=pointer]:
                  - img [ref=e548]
                  - text: Dresses
              - generic [ref=e550] [cursor=pointer]:
                - generic [ref=e551]: 
                - text: Add to cart
            - generic [ref=e552]:
              - heading "Rs. 1600" [level=2] [ref=e553]
              - paragraph [ref=e554]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e555] [cursor=pointer]:
                - generic [ref=e556]: 
                - text: Add to cart
          - list [ref=e558]:
            - listitem [ref=e559]:
              - link " View Product" [ref=e560]:
                - /url: /product_details/22
                - generic [ref=e561]: 
                - text: View Product
        - generic [ref=e563]:
          - generic [ref=e564]:
            - generic [ref=e565]:
              - img "ecommerce website products" [ref=e566]
              - heading "Rs. 1100" [level=2] [ref=e567]
              - paragraph [ref=e568]:
                - text: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
                - link "Apparel" [ref=e569] [cursor=pointer]:
                  - img [ref=e571]
                  - text: Apparel
              - generic [ref=e573] [cursor=pointer]:
                - generic [ref=e574]: 
                - text: Add to cart
            - generic [ref=e575]:
              - heading "Rs. 1100" [level=2] [ref=e576]
              - paragraph [ref=e577]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e578] [cursor=pointer]:
                - generic [ref=e579]: 
                - text: Add to cart
          - list [ref=e581]:
            - listitem [ref=e582]:
              - link " View Product" [ref=e583]:
                - /url: /product_details/23
                - generic [ref=e584]: 
                - text: View Product
        - generic [ref=e586]:
          - generic [ref=e587]:
            - generic [ref=e588]:
              - img "ecommerce website products" [ref=e589]
              - heading "Rs. 849" [level=2] [ref=e590]
              - paragraph [ref=e591]:
                - text: Colour Blocked Shirt – Sky Blue
                - link "Textiles & Nonwovens" [ref=e592] [cursor=pointer]:
                  - img [ref=e594]
                  - text: Textiles & Nonwovens
              - generic [ref=e596] [cursor=pointer]:
                - generic [ref=e597]: 
                - text: Add to cart
            - generic [ref=e598]:
              - heading "Rs. 849" [level=2] [ref=e599]
              - paragraph [ref=e600]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e601] [cursor=pointer]:
                - generic [ref=e602]: 
                - text: Add to cart
          - list [ref=e604]:
            - listitem [ref=e605]:
              - link " View Product" [ref=e606]:
                - /url: /product_details/24
                - generic [ref=e607]: 
                - text: View Product
        - generic [ref=e609]:
          - generic [ref=e610]:
            - generic [ref=e611]:
              - img "ecommerce website products" [ref=e612]
              - heading "Rs. 1299" [level=2] [ref=e613]
              - paragraph [ref=e614]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=e615] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e616]
                  - text: T-Shirt
              - generic [ref=e618] [cursor=pointer]:
                - generic [ref=e619]: 
                - text: Add to cart
            - generic [ref=e620]:
              - heading "Rs. 1299" [level=2] [ref=e621]
              - paragraph [ref=e622]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e623] [cursor=pointer]:
                - generic [ref=e624]: 
                - text: Add to cart
          - list [ref=e626]:
            - listitem [ref=e627]:
              - link " View Product" [ref=e628]:
                - /url: /product_details/28
                - generic [ref=e629]: 
                - text: View Product
        - generic [ref=e631]:
          - generic [ref=e632]:
            - generic [ref=e633]:
              - img "ecommerce website products" [ref=e634]
              - heading "Rs. 1000" [level=2] [ref=e635]
              - paragraph [ref=e636]: Green Side Placket Detail T-Shirt
              - generic [ref=e637] [cursor=pointer]:
                - generic [ref=e638]: 
                - text: Add to cart
            - generic [ref=e639]:
              - heading "Rs. 1000" [level=2] [ref=e640]
              - paragraph [ref=e641]: Green Side Placket Detail T-Shirt
              - generic [ref=e642] [cursor=pointer]:
                - generic [ref=e643]: 
                - text: Add to cart
          - list [ref=e645]:
            - listitem [ref=e646]:
              - link " View Product" [ref=e647]:
                - /url: /product_details/29
                - generic [ref=e648]: 
                - text: View Product
        - generic [ref=e650]:
          - generic [ref=e651]:
            - generic [ref=e652]:
              - img "ecommerce website products" [ref=e653]
              - heading "Rs. 1500" [level=2] [ref=e654]
              - paragraph [ref=e655]: Premium Polo T-Shirts
              - generic [ref=e656] [cursor=pointer]:
                - generic [ref=e657]: 
                - text: Add to cart
            - generic [ref=e658]:
              - heading "Rs. 1500" [level=2] [ref=e659]
              - paragraph [ref=e660]: Premium Polo T-Shirts
              - generic [ref=e661] [cursor=pointer]:
                - generic [ref=e662]: 
                - text: Add to cart
          - list [ref=e664]:
            - listitem [ref=e665]:
              - link " View Product" [ref=e666]:
                - /url: /product_details/30
                - generic [ref=e667]: 
                - text: View Product
        - generic [ref=e669]:
          - generic [ref=e670]:
            - generic [ref=e671]:
              - img "ecommerce website products" [ref=e672]
              - heading "Rs. 850" [level=2] [ref=e673]
              - paragraph [ref=e674]: Pure Cotton Neon Green Tshirt
              - generic [ref=e675] [cursor=pointer]:
                - generic [ref=e676]: 
                - text: Add to cart
            - generic [ref=e677]:
              - heading "Rs. 850" [level=2] [ref=e678]
              - paragraph [ref=e679]: Pure Cotton Neon Green Tshirt
              - generic [ref=e680] [cursor=pointer]:
                - generic [ref=e681]: 
                - text: Add to cart
          - list [ref=e683]:
            - listitem [ref=e684]:
              - link " View Product" [ref=e685]:
                - /url: /product_details/31
                - generic [ref=e686]: 
                - text: View Product
        - generic [ref=e688]:
          - generic [ref=e689]:
            - generic [ref=e690]:
              - img "ecommerce website products" [ref=e691]
              - heading "Rs. 799" [level=2] [ref=e692]
              - paragraph [ref=e693]: Soft Stretch Jeans
              - generic [ref=e694] [cursor=pointer]:
                - generic [ref=e695]: 
                - text: Add to cart
            - generic [ref=e696]:
              - heading "Rs. 799" [level=2] [ref=e697]
              - paragraph [ref=e698]: Soft Stretch Jeans
              - generic [ref=e699] [cursor=pointer]:
                - generic [ref=e700]: 
                - text: Add to cart
          - list [ref=e702]:
            - listitem [ref=e703]:
              - link " View Product" [ref=e704]:
                - /url: /product_details/33
                - generic [ref=e705]: 
                - text: View Product
        - generic [ref=e707]:
          - generic [ref=e708]:
            - generic [ref=e709]:
              - img "ecommerce website products" [ref=e710]
              - heading "Rs. 1200" [level=2] [ref=e711]
              - paragraph [ref=e712]: Regular Fit Straight Jeans
              - generic [ref=e713] [cursor=pointer]:
                - generic [ref=e714]: 
                - text: Add to cart
            - generic [ref=e715]:
              - heading "Rs. 1200" [level=2] [ref=e716]
              - paragraph [ref=e717]: Regular Fit Straight Jeans
              - generic [ref=e718] [cursor=pointer]:
                - generic [ref=e719]: 
                - text: Add to cart
          - list [ref=e721]:
            - listitem [ref=e722]:
              - link " View Product" [ref=e723]:
                - /url: /product_details/35
                - generic [ref=e724]: 
                - text: View Product
        - generic [ref=e726]:
          - generic [ref=e727]:
            - generic [ref=e728]:
              - img "ecommerce website products" [ref=e729]
              - heading "Rs. 1400" [level=2] [ref=e730]
              - paragraph [ref=e731]: Grunt Blue Slim Fit Jeans
              - generic [ref=e732] [cursor=pointer]:
                - generic [ref=e733]: 
                - text: Add to cart
            - generic [ref=e734]:
              - heading "Rs. 1400" [level=2] [ref=e735]
              - paragraph [ref=e736]: Grunt Blue Slim Fit Jeans
              - generic [ref=e737] [cursor=pointer]:
                - generic [ref=e738]: 
                - text: Add to cart
          - list [ref=e740]:
            - listitem [ref=e741]:
              - link " View Product" [ref=e742]:
                - /url: /product_details/37
                - generic [ref=e743]: 
                - text: View Product
        - generic [ref=e745]:
          - generic [ref=e746]:
            - generic [ref=e747]:
              - img "ecommerce website products" [ref=e748]
              - heading "Rs. 2300" [level=2] [ref=e749]
              - paragraph [ref=e750]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e751] [cursor=pointer]:
                - generic [ref=e752]: 
                - text: Add to cart
            - generic [ref=e753]:
              - heading "Rs. 2300" [level=2] [ref=e754]
              - paragraph [ref=e755]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e756] [cursor=pointer]:
                - generic [ref=e757]: 
                - text: Add to cart
          - list [ref=e759]:
            - listitem [ref=e760]:
              - link " View Product" [ref=e761]:
                - /url: /product_details/38
                - generic [ref=e762]: 
                - text: View Product
        - generic [ref=e764]:
          - generic [ref=e765]:
            - generic [ref=e766]:
              - img "ecommerce website products" [ref=e767]
              - heading "Rs. 3000" [level=2] [ref=e768]
              - paragraph [ref=e769]: Cotton Silk Hand Block Print Saree
              - generic [ref=e770] [cursor=pointer]:
                - generic [ref=e771]: 
                - text: Add to cart
            - generic [ref=e772]:
              - heading "Rs. 3000" [level=2] [ref=e773]
              - paragraph [ref=e774]: Cotton Silk Hand Block Print Saree
              - generic [ref=e775] [cursor=pointer]:
                - generic [ref=e776]: 
                - text: Add to cart
          - list [ref=e778]:
            - listitem [ref=e779]:
              - link " View Product" [ref=e780]:
                - /url: /product_details/39
                - generic [ref=e781]: 
                - text: View Product
        - generic [ref=e783]:
          - generic [ref=e784]:
            - generic [ref=e785]:
              - img "ecommerce website products" [ref=e786]
              - heading "Rs. 3500" [level=2] [ref=e787]
              - paragraph [ref=e788]: Rust Red Linen Saree
              - generic [ref=e789] [cursor=pointer]:
                - generic [ref=e790]: 
                - text: Add to cart
            - generic [ref=e791]:
              - heading "Rs. 3500" [level=2] [ref=e792]
              - paragraph [ref=e793]: Rust Red Linen Saree
              - generic [ref=e794] [cursor=pointer]:
                - generic [ref=e795]: 
                - text: Add to cart
          - list [ref=e797]:
            - listitem [ref=e798]:
              - link " View Product" [ref=e799]:
                - /url: /product_details/40
                - generic [ref=e800]: 
                - text: View Product
        - generic [ref=e802]:
          - generic [ref=e803]:
            - generic [ref=e804]:
              - img "ecommerce website products" [ref=e805]
              - heading "Rs. 5000" [level=2] [ref=e806]
              - paragraph [ref=e807]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e808] [cursor=pointer]:
                - generic [ref=e809]: 
                - text: Add to cart
            - generic [ref=e810]:
              - heading "Rs. 5000" [level=2] [ref=e811]
              - paragraph [ref=e812]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e813] [cursor=pointer]:
                - generic [ref=e814]: 
                - text: Add to cart
          - list [ref=e816]:
            - listitem [ref=e817]:
              - link " View Product" [ref=e818]:
                - /url: /product_details/41
                - generic [ref=e819]: 
                - text: View Product
        - generic [ref=e821]:
          - generic [ref=e822]:
            - generic [ref=e823]:
              - img "ecommerce website products" [ref=e824]
              - heading "Rs. 1400" [level=2] [ref=e825]
              - paragraph [ref=e826]: Lace Top For Women
              - generic [ref=e827] [cursor=pointer]:
                - generic [ref=e828]: 
                - text: Add to cart
            - generic [ref=e829]:
              - heading "Rs. 1400" [level=2] [ref=e830]
              - paragraph [ref=e831]: Lace Top For Women
              - generic [ref=e832] [cursor=pointer]:
                - generic [ref=e833]: 
                - text: Add to cart
          - list [ref=e835]:
            - listitem [ref=e836]:
              - link " View Product" [ref=e837]:
                - /url: /product_details/42
                - generic [ref=e838]: 
                - text: View Product
        - generic [ref=e840]:
          - generic [ref=e841]:
            - generic [ref=e842]:
              - img "ecommerce website products" [ref=e843]
              - heading "Rs. 1389" [level=2] [ref=e844]
              - paragraph [ref=e845]:
                - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
                - link "Dresses" [ref=e846] [cursor=pointer]:
                  - img [ref=e848]
                  - text: Dresses
              - generic [ref=e850] [cursor=pointer]:
                - generic [ref=e851]: 
                - text: Add to cart
            - generic [ref=e852]:
              - heading "Rs. 1389" [level=2] [ref=e853]
              - paragraph [ref=e854]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e855] [cursor=pointer]:
                - generic [ref=e856]: 
                - text: Add to cart
          - list [ref=e858]:
            - listitem [ref=e859]:
              - link " View Product" [ref=e860]:
                - /url: /product_details/43
                - generic [ref=e861]: 
                - text: View Product
      - generic [ref=e862]:
        - heading "recommended items" [level=2] [ref=e863]
        - generic [ref=e864]:
          - generic [ref=e865]:
            - generic [ref=e866]:
              - generic [ref=e870]:
                - img "ecommerce website products" [ref=e871]
                - heading "Rs. 500" [level=2] [ref=e872]
                - paragraph [ref=e873]: Blue Top
                - generic [ref=e874] [cursor=pointer]:
                  - generic [ref=e875]: 
                  - text: Add to cart
              - generic [ref=e879]:
                - img "ecommerce website products" [ref=e880]
                - heading "Rs. 400" [level=2] [ref=e881]
                - paragraph [ref=e882]: Men Tshirt
                - generic [ref=e883] [cursor=pointer]:
                  - generic [ref=e884]: 
                  - text: Add to cart
              - generic [ref=e888]:
                - img "ecommerce website products" [ref=e889]
                - heading "Rs. 1000" [level=2] [ref=e890]
                - paragraph [ref=e891]: Rs. 1000
                - generic [ref=e892] [cursor=pointer]:
                  - generic [ref=e893]: 
                  - text: Add to cart
            - generic:
              - generic [ref=e897]:
                - img "ecommerce website products" [ref=e898]
                - heading "Rs. 1500" [level=2] [ref=e899]
                - paragraph [ref=e900]: Stylish Dress
                - generic [ref=e901] [cursor=pointer]:
                  - generic [ref=e902]: 
                  - text: Add to cart
              - generic [ref=e906]:
                - img "ecommerce website products" [ref=e907]
                - heading "Rs. 600" [level=2] [ref=e908]
                - paragraph [ref=e909]: Winter Top
                - generic [ref=e910] [cursor=pointer]:
                  - generic [ref=e911]: 
                  - text: Add to cart
              - generic [ref=e915]:
                - img "ecommerce website products" [ref=e916]
                - heading "Rs. 400" [level=2] [ref=e917]
                - paragraph [ref=e918]: Summer White Top
                - generic [ref=e919] [cursor=pointer]:
                  - generic [ref=e920]: 
                  - text: Add to cart
          - link "" [ref=e921]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e922]: 
          - link "" [ref=e923]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e924]: 
  - insertion [ref=e926]
  - contentinfo [ref=e928]:
    - generic [ref=e933]:
      - heading "Subscription" [level=2] [ref=e934]
      - generic [ref=e935]:
        - textbox "Your email address" [ref=e936]
        - button "" [ref=e937] [cursor=pointer]:
          - generic [ref=e938]: 
        - paragraph [ref=e939]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e943]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e944]:
    - iframe [ref=e947]:
      - iframe [ref=f8e1]:
        - generic [active]:
          - generic [ref=f9e1]:
            - generic [ref=f9e2]:
              - generic:
                - img [ref=f9e6] [cursor=pointer]
                - button [ref=f9e8] [cursor=pointer]:
                  - img [ref=f9e9]
            - insertion [ref=f9e17]:
              - generic [ref=f9e18]:
                - link "Click Here" [ref=f9e19]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CHjJS2JxTavTPDamMjeYP_v3qiAe9_fLggQHG7o3_oBWvgbrj1wIQASD9tJ6VAWDlgoCAvA6gAYviiqAByAEJqAMByAObBKoEmAJP0FsS-qhNdtufhWTIGc2veMQWGQUJK01JtuOYtXoI6UTKAo4N7r0G25areT4NUXh9ry2XuSakcVTEyiIvMkUkGQz0SwuvSPatdBxiPPznBAg-V3RWltPZ5_W9GCRqDTaTycUYSh4d3jPwRb8m3wT_oNRJVgVFvOLBUCMcBneOoXwFZN8aY-oapXUd-14DXBFY8cedYFjsJ3o1k3sdesq9MgUR2o5C_v0pPZ35pgU2gNkkIrAm7Q4AMhK9ksM087wMZ6naNj_XJsbi990KOwkRhAGr1vKMyl8Q-EIRZiAWfaFBiLTxEm8_LZSf1_-FGLkyKEMyOXoF771l7Ao1Iex9JcoT-JqGm6uf3aVpxBo2Uc9FOt6-uZ6HwATst5qUpQXgBAOIBZH4qpdUkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY_9uGoKXNlQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCKugiaClzZUDFSlGwwYd_r4acfANAYgOCbAT84q2I9ATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRIC6FgYTSIBANAZAQ&ae=1&num=1&cid=CAQSngIAEQoqgfWXya0pjCGlgGcCuU3tTKJedlOIeNYxjHVjyI7Y2x9sKUZfM35uIfx_du6u85nHB9Aa9xBz4p43itoHhprv5NE7Ig8tEyZbn7bzakPaNPFQNRFjsANKWnFNJTqNZeWcnzjIODlFfnoFEYXwi8UpPlsiugm4tP4nrQGvM42NcyXvMiISnm7NyCsMYixALGo4oov_BLTD6WbGVoPDUeTpglESQoCtJ4VT0pFrWFSj4MJkZexXwdC5_ub__WPeGC0xcAGrY6berie_2h_3e9Emoo7Kph7jXRmG4sEUu_WgpyxMwK87YaJX0THTu2_aIDrcM3o0jI6Zgih7ttjOhnvkipR_Iy0e8afBx-XGtTRYqZECZO0Ey-79ikr8GAE&sig=AOD64_2UmMbO_Hu3aeh0mtEvjtHWtqXV7A&client=ca-pub-1677597403311019&dbm_c=AKAmf-BxbYGjCNn82pYIkhdoubIPn6wzDELRJFr1D0brKjB_9bzq7NV6BQ27iq7AsnSe9cW07fq_oIRzT4251pPAuIb8-h3wbZdDd9hidhYFGzh_OrXZPwfDWsQWwxI9fxpmldcGWdjK6fi4MLEPy3viGH2YrxCKFYnspvm0DxkvPsSXCm3dH7wmkZ4Gyl_mOaqXydOBzcub_Fuda_MR73gKV69uYZWsExuTXcNE3fabtnOHUY4xwimDayNeDtorvooF9j-gR-rL1J2SmcpFBpQExbpwaXzB6Jc0zVLpDelSIICJNWi8LNt2aEuT324O1zy-kx7gxJ6_&cry=1&dbm_d=AKAmf-Bd9GMJsciLZUMQ8eH4chgz1UmQeLSkj99joJcphKxFnbdzrhw9fzSCm6SeVBvbtyPhIbO0OfVQldg30XA5u8Atet65WK8EWF9xy7LJ-wLkWAMSOoYX8Q8Gr1dDk68kJhH2UjY6IEg-xVOV2r6__5-l6HxzrkhfdLAgSo0E8fQn1SNLP9qQ3G_1j8H0ZjH4h4p2LKsj2QwOA64XCaVDkb2yotlTm7cU2V82z7SUi_5FbkHRP4ftlsCrYGKXAeQn7Ym-sdVP8IPz2pTsKmMBGtI17ecEuCGPU3SNnPQY8aqFmjQTfJeLqCrw-WZDCmu1NpLDGyjR9ofTXw_GRgUyIuNXe2TZS8IN25OXJyER3QTTliFVbdk5RD7Bu3O6FFOjQZE-RwMflXz_C9VcxEKl4kj68XBgeOX0Ks1xD5GDCZBgbYyQ7rC-UoXo2VwiNEdkbe6TBo3WXyLcOs2dRarSmhTLf-wYGrzJeiv2rhOJH9-r2eFJ0ZgTH4MLsTB6wB57cK9xs-Fg4DTiYtiL4aW2KENREosgrnWw3c4tEh33OpASEQr_yfQn49bx11yuRlZnvVzf3rjQZZs10nAeNK9kB7pgzYUyBWai8j75ywnovCbW9_dXifJOl54QfACAFF8-gV2zEqST4QWWj8TmDsV0Q1vpvYV67qAcw_ap6O6uzAL6Rfu1EYPxDB6lr7Yd2BdwTylcPo651OUOCp2WEu-dZ9J0dhsQG2dwV_a2f83SvVWRFephymY&adurl=https://servedby.flashtalking.com/click/7/296969;10263004;6099005;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0gxH4S46Ied2nRgrpTdaGkd&ft_impID=70E8B878-9A58-2D0F-9E08-AF14294A1AB1&ft_section=22597516305&g=6767F6C229FEF2&random=63997.123378594704&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                  - img "Click Here" [ref=f9e20]
                - link "AdChoices arrow" [ref=f9e22]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f9e23]
                - link "Privacy Notification" [ref=f9e25]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f9e26]
                - link "Privacy Notification" [ref=f9e28]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f9e29]
          - iframe
  - generic [ref=e948]:
    - generic [ref=e949] [cursor=pointer]:
      - img [ref=e951]
      - link "Go to shopping options for T-Shirts" [ref=e953]: T-Shirts
    - button "Close shopping anchor" [ref=e954]
```

# Test source

```ts
  1   | // spec: specs/AutomationExercise_TestPlan.md
  2   | // Test Suite: Page Load and Performance
  3   | 
  4   | const { test, expect } = require('@playwright/test');
  5   | 
  6   | test.describe('Page Load and Performance', () => {
  7   |   test('Homepage loads within acceptable time', async ({ page }) => {
  8   |     // Measure homepage load time
  9   |     const startTime = Date.now();
  10  |     
> 11  |     await page.goto('https://automationexercise.com/', { waitUntil: 'networkidle' });
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  12  |     
  13  |     const loadTime = Date.now() - startTime;
  14  |     
  15  |     // Verify page title
  16  |     await expect(page).toHaveTitle(/Automation Exercise/);
  17  |     
  18  |     // Verify key elements are visible
  19  |     const logo = page.locator('img[alt*="automation practice"]').first();
  20  |     await expect(logo).toBeVisible();
  21  |     
  22  |     // Homepage should load in reasonable time (under 10 seconds)
  23  |     expect(loadTime).toBeLessThan(10000);
  24  |     
  25  |     console.log(`Homepage load time: ${loadTime}ms`);
  26  |   });
  27  | 
  28  |   test('Products page loads with all items', async ({ page }) => {
  29  |     // Navigate to products page
  30  |     const startTime = Date.now();
  31  |     
  32  |     await page.goto('https://automationexercise.com/products', { waitUntil: 'networkidle' });
  33  |     
  34  |     const loadTime = Date.now() - startTime;
  35  |     
  36  |     // Verify page title
  37  |     await expect(page).toHaveTitle(/Automation Exercise - All Products/);
  38  |     
  39  |     // Verify products are visible
  40  |     const productImages = page.locator('img[alt="ecommerce website products"]');
  41  |     const imageCount = await productImages.count();
  42  |     expect(imageCount).toBeGreaterThan(0);
  43  |     
  44  |     console.log(`Products page load time: ${loadTime}ms`);
  45  |   });
  46  | 
  47  |   test('Cart page loads quickly', async ({ page }) => {
  48  |     // Navigate to cart page
  49  |     const startTime = Date.now();
  50  |     
  51  |     await page.goto('https://automationexercise.com/view_cart', { waitUntil: 'networkidle' });
  52  |     
  53  |     const loadTime = Date.now() - startTime;
  54  |     
  55  |     // Verify page title
  56  |     await expect(page).toHaveTitle(/Automation Exercise - Checkout/);
  57  |     
  58  |     console.log(`Cart page load time: ${loadTime}ms`);
  59  |   });
  60  | 
  61  |   test('Product details page loads all information', async ({ page }) => {
  62  |     // Navigate to product details page
  63  |     const startTime = Date.now();
  64  |     
  65  |     await page.goto('https://automationexercise.com/product_details/1', { waitUntil: 'networkidle' });
  66  |     
  67  |     const loadTime = Date.now() - startTime;
  68  |     
  69  |     // Verify page title
  70  |     await expect(page).toHaveTitle(/Automation Exercise - Product Details/);
  71  |     
  72  |     // Verify product image
  73  |     const productImage = page.locator('img[alt="ecommerce website products"]').first();
  74  |     await expect(productImage).toBeVisible();
  75  |     
  76  |     // Verify product information
  77  |     const productName = page.locator('h2').first();
  78  |     await expect(productName).toBeVisible();
  79  |     
  80  |     console.log(`Product details page load time: ${loadTime}ms`);
  81  |   });
  82  | 
  83  |   test('Contact page loads quickly', async ({ page }) => {
  84  |     // Navigate to contact page
  85  |     const startTime = Date.now();
  86  |     
  87  |     await page.goto('https://automationexercise.com/contact_us', { waitUntil: 'networkidle' });
  88  |     
  89  |     const loadTime = Date.now() - startTime;
  90  |     
  91  |     // Verify page title
  92  |     await expect(page).toHaveTitle(/Automation Exercise - Contact Us/);
  93  |     
  94  |     console.log(`Contact page load time: ${loadTime}ms`);
  95  |   });
  96  | 
  97  |   test('Login page loads quickly', async ({ page }) => {
  98  |     // Navigate to login page
  99  |     const startTime = Date.now();
  100 |     
  101 |     await page.goto('https://automationexercise.com/login', { waitUntil: 'networkidle' });
  102 |     
  103 |     const loadTime = Date.now() - startTime;
  104 |     
  105 |     // Verify page title
  106 |     await expect(page).toHaveTitle(/Automation Exercise - Signup/);
  107 |     
  108 |     console.log(`Login page load time: ${loadTime}ms`);
  109 |   });
  110 | 
  111 |   test('No broken images on homepage', async ({ page }) => {
```