## Precedence of Operator in JavaScript

- What is the Precedence?

  - Precedence akta english word. jar mane holo agradhikar. sohoj vasay jodi
    boli tahole `precedence` mane holo kar age kar odhikar.
  - Example: ami r abar abbu 2 jone jodi ak sathe kono biye barite jai tahole
    sekhane amr theke amr babar e odhikar ta dibe mane age abr abbu k jiggas
    korbe `bondhu` kemon asis, jokhon abbur sathe kotha bola sesh hobe tokhoni
    kintu amk bolbe j `sabbir` tmr ki obostha kmn aso.
  - So, amra ay example theke bujhte parlam akhane amr theke amr babar
    `priority` ta beshi.

- Example of JavaScript Precedence.
  - **Example 1**
    ```js
    console.log(3 + 4 * 5); // 3 + 20
    // Expected output: 23
    ```
    akhane `*` i mean `multiplication` operator ar `precedence` beshi `addition`
    operator ar theke.
    - `3+4` prothome thaka sottew `4*5` ar math ta age kora hoyeche
  - **Example 2**
    ```js
    console.log(4 * 3 ** 2); // 4 * 9
    // Expected output: 36
    ```
    akhen `3**2` i mean `Exponentiation` age korbe and then 4 ar sathe
    `multiplication` korbe karon karon `*` ar theke `**` ar precedence beshi.
    - Tahole age `3` k `2` dara exponentiation korbe then abr `4` ar sathe
      gun(`*`) korbe.

#### What is Expression

Expression mane holo vab. amra onk somoy fnd der kono mukher vab theke boli
na,,, vai re vai or mukher expression ta ja chilo na 😂 Mainly setai holo
expression

- **Example of Expression in JS**
  ```js
  const sums = 20 + 30 * 40;
  ```
  akhen `20 + 30 * 40` ay purotukui akta expression
