# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation\navigation-ui.spec.js >> Navigation and UI >> Navigation links are accessible from all pages
- Location: tests\navigation\navigation-ui.spec.js:51:3

# Error details

```
Test timeout of 30000ms exceeded.
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
  - generic [ref=e37]:
    - heading "Contact Us" [level=2] [ref=e41]:
      - text: Contact
      - strong [ref=e42]: Us
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e46]:
          - text: "Note: Below contact form is for testing purpose."
          - link "Development Tools" [ref=e47] [cursor=pointer]:
            - img [ref=e49]
            - text: Development Tools
        - heading "Get In Touch" [level=2] [ref=e51]
        - generic [ref=e53]:
          - textbox "Name" [ref=e55]
          - textbox "Email" [ref=e57]
          - textbox "Subject" [ref=e59]
          - textbox "Your Message Here" [ref=e61]
          - button "Choose File" [ref=e63]
          - button "Submit" [ref=e65] [cursor=pointer]
      - generic [ref=e67]:
        - heading "Feedback For Us" [level=2] [ref=e68]
        - generic [ref=e69]:
          - paragraph [ref=e70]: We really appreciate your response to our website.
          - paragraph [ref=e71]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e72] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e73]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e74]: Thank you
  - insertion [ref=e76]:
    - generic [ref=e79]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e81]: Discover more
      - link "Test case automation" [ref=e82] [cursor=pointer]:
        - generic "Test case automation" [ref=e83]
        - img [ref=e85]
      - link "Testing service providers" [ref=e87] [cursor=pointer]:
        - generic "Testing service providers" [ref=e88]
        - img [ref=e90]
      - link "E-learning platforms" [ref=e92] [cursor=pointer]:
        - generic "E-learning platforms" [ref=e93]
        - img [ref=e95]
  - contentinfo [ref=e97]:
    - generic [ref=e102]:
      - heading "Subscription" [level=2] [ref=e103]
      - generic [ref=e104]:
        - textbox "Your email address" [ref=e105]
        - button "" [ref=e106] [cursor=pointer]:
          - generic [ref=e107]: 
        - paragraph [ref=e108]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e112]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e113]:
    - iframe [ref=e116]:
      - iframe [ref=f31e1]:
        - generic [active]:
          - generic [ref=f32e1]:
            - generic [ref=f32e2]:
              - generic:
                - img [ref=f32e6] [cursor=pointer]
                - button [ref=f32e8] [cursor=pointer]:
                  - img [ref=f32e9]
            - insertion [ref=f32e16]:
              - generic [ref=f32e17]:
                - link "Click Here" [ref=f32e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CXRr5X5xTaujrNKXqs8IP2dbViQbd_cvuhQHqrpDioxWv5Z25wEYQASD9tJ6VAWDlgoCAvA6gAYviiqAByAEJqAMByAObBKoEhgJP0EexydjPrBRslGATzPgdrH9SLYmpVosyuZBIpjq4FRYTQZXhT1yUvDVZ71JAYCh-XOz1MRqgqSLLrnCtUckqePlQvqV9PfAcF8EwIAonjtUtKyOmLQsvGZ1CqS_mNgbfcWIHek6l8nzV28qWj_o7pu4L5B1SvHgoMlDcdpAHaLIgS2gSk25yqQqV32UOknYujVS9eQWcVDzZB96VZ3BqaMopxA4bfu06phr_4n1efod65-MJvXc7JTvgl2tTjtsYsOpRoVyoJz5fvK4FSOes9V4yw4X-F-Cvosvm4yg7MxycgVPvQgAw8OzCVX8DJHwH5gQm6oVZ5JXMjqBFX0BxnVA1H9dzwATz3IzutAXgBAOIBY-elaNUkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYitjV5qTNlQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCOac1-akzZUDFSX1TAIdWWs1YfANAYgOCbATtZK7I9ATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAdgZAQ&ae=1&num=1&cid=CAQSjAIAEQoqgd1Y_2Ppfy25ePxbfDQTWZQfKQmTo2ahQ0M9dZ0SX_8pVlQjggj-oSTu7C-iTQtbziDRnY5NDguTQYNK0nBDlBnSWgIY5AyPq5ugMKR5DfOgUsGOF-KEtn-PNSx8Wt0s1r4XlHcOnZvHJpVP6YZ-1OO7_0dtayrnJR9jKe6EMKmyWzMVY1WEYsLReLdMbKEiVNdNd8dNbyc_kbiT127de7x7oNwvYQOM6nM8uDjLrOOCcCoPwpz403RgQXCetj17cPqNfkTg0DGMJoCoW1tBGSbE3PBf3_rE1s_Qgpr0xBBov9rFQDEwAW7NLJ0FID3g4jrkerZx6bt4zb2M5vYE_K-ab5lat_0MGAE&sig=AOD64_03RcRp4CaBQ2AZZYT-Tk4JqF3M2A&client=ca-pub-1677597403311019&dbm_c=AKAmf-D27i5pNAJkWZD0cQZMRqg9JmYtvCnHidtQGx1ovHwciYg8zYKAmWHFoYP9pvRyXmWzF-K-AbT0r7gDJaxT0J3w8Zj-V1S1UrHl7MrqRiTtAkAZzyC6QcmaC42GnxXL2qFB8gjq5qzHXm6o02b3J2ga9rk1ao5GtUQSgejnPKFWx0vgrOzFRjILGDqyRgkwmAF-boEO6H3m_udOZ2FKMOirroejx3NHEFra5ZxqInk5cfNUWaEb1Xuuw8-WNPUXWv4OQc7H0v7f5QOD4gmvH5D68J-mBRk_TBZDWTiyoYLjNflH_tqgy4cL9W19CT046AMOxyCE&cry=1&dbm_d=AKAmf-D4RJOT0qZP9s1LNZs1l2SNpVRt308XwYB-49zjrYvsVmuxFoFPWg0kJr01AHU_4D6BuQf2o8D4sSep4z958e-FXOPJJtA_imkM8rAmIWoww8D9ylCa-CIUs8awETZ4APq_SSgwD5jkg2xu-BIIwndRpho5LLc4gLFAta26TTd117JW2Jma59ZkrE5ztr33xpi-UZMbWh6dEVBtj5EtFh_nlZuuoWAsLDrxtXdlT-S-l9S7Wf7sJq86_4_sMKGejwmYxHcsu9vjW3oa08zK1qqcILiDJfp53hPyqSkgyUI7ubwPi2OiF4flHJGzv2nGYpSEaLUXvKL_EggAcfgdu9GvQ61vGcz6kQ7iF9QGUmOAfmfHcv2R5U4x3I3EsMhTiA7zScl4zot17rzvKJ-q_lrRloYK5PImRpzzPx6iHKiXkTJjBF0t0neCnRT1FO1H1BOPKMs1Kf_3LKdM9KskqsBURz83BJgImbCux0iz6uI1KiTKBC5LOmPjTX5nzC6JXJPWckGW60EUOzQagD-5FZMWB1fVrjAwvXDzRQ5n9IRPDVN3p-XybhHDft5Aq-5iwDdYoN2rWb8GPIcKW5yzVzbDhUib_PIbKyzIEQWiUJJW0O2sL6ZNTW-KFfh2Ac5bwwpLCbpKyK6HesW_nXwZHfvbMm__5K2pmboJSGcrNes1gGQk5LW9CI9UrDu_JDjb8tfebf_n_ZAHm5nlcSfg8qwK-GfouKOe4aQbhx4VXm6usKrNCZFYsY2fF9ZaLEjFiIimCo3L&adurl=https://servedby.flashtalking.com/click/7/296653;10338317;6146781;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0h4Iod4dmnnuYs_PZjDqi3V&ft_impID=5642E98E-CC29-4296-31D4-5F84D13111DA&ft_section=22622326543&g=6767B74D74BF84&random=441703.23729181633&ft_width=728&ft_height=90&url=https://www.adobe.com/in/education/students/creativecloud.html?&sdid=PQ7SPXQB&mv=display&mv2=display
                  - img "Click Here" [ref=f32e19]
                - link "AdChoices arrow" [ref=f32e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f32e22]
                - link "Privacy Notification" [ref=f32e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f32e25]
                - link "Privacy Notification" [ref=f32e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f32e28]
          - iframe
  - generic [ref=e117]:
    - generic [ref=e118] [cursor=pointer]:
      - img [ref=e120]
      - link "Go to shopping options for Constitutional Law & Civil Rights" [ref=e122]: Constitutional Law & Civil Rights
    - button "Close shopping anchor" [ref=e123]
```