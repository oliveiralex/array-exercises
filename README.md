## Exercícios:

#### Máximo 1s consecutivos ([LeetCode](https://leetcode.com/problems/max-consecutive-ones/))

Dado um array binário nums, retorne o número máximo de 1s consecutivos no array.

* Exemplo 1:

    ```bash
    entrada: nums = [1,1,0,1,1,1]
    saída: 3
    ```
    <small>**Explicação:** *Os dois primeiros dígitos ou os últimos três são 1s consecutivos. O número máximo de 1s consecutiovs é 3*.</small>

* Exemplo 2:

    ```bash
    entrada: nums = [1,0,1,1,0,1]
    saída: 2
    ```

#### Produto Escalar de Dois Vetores ([<small>Adaptado Leetcode</small>](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/))

Dados dois arrays, calcule o seu produto escalar.

* Exemplo 1:

    ```bash
    entrada: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
    saída: 8
    ```
    <small>**Explicação:** O produto escalar dos arrays acima pode ser encontrado pela expressão: 
    (1 * 0) + (0 * 3) + (0 * 0) + (2 * 4) + (3 * 0) = 8</small>

* Exemplo 2:

    ```bash
    entrada: nums1 = [0,1,0,0,0], nums2 = [0,1,0,0,0]
    saída: 0
    ```

* Exemplo 3:

    ```bash
    entrada: nums1 = [0,1,0,0,2,0,0], nums2 = [1,0,0,0,3,0,4]
    saída: 0
    ```

#### Encontrar vendedor com maior valor de venda ([<small>arquivo json</small>](https://gist.github.com/oliveiralex/ad6630b18e6d01a8a22eec29e6e7889b))

Dado um array de vendedores, cada um representado por um objeto com o nome do vendedor `name` e o valor de suas vendas `amount`, crie uma função para encontrar e retornar o vendedor que obteve o maior valor de venda.

<small>Utilize o seguinte arquivo para o problema: [seller.json](https://gist.github.com/oliveiralex/ad6630b18e6d01a8a22eec29e6e7889b)
</small>

#### Quadrados de um Array Ordenado

Dado um array de números inteiros `nums` ordenado em ordem crescente, retorne um array com os quadrados de cada número, também ordenado de forma crescente.

* Exemplo 1:

    ```bash
    entrada: nums = [-4,-1,0,3,10]
    saída: [0,1,9,16,100]
    ```
    <small>**Explicação:** Após elevar ao quadrado, temos como resultado o array [16, 1, 0, 9, 100]. Em seguida, após ordenar os valores do array, temos [0, 1, 9, 16, 100].</small>

* Exemplo 2:

    ```bash
    entrada: nums = [-7,-3,2,3,11]
    saída: [4,9,9,49,121]
    ```

#### Duplicar zeros

Dado um array de inteiros `arr`, duplique cada ocorrência de zero, deslocando os elementos restantes para a direita (*shifting right*).

Observe que elementos além do tamanho do array original não são escritos.

Utilize a abordagem "In-place" na qual a modificação é feita diretamente no array.

* Exemplo 1:

    ```bash
    entrada: nums = [1,0,2,3,0,4,5,0]
    saída: [1,0,0,2,3,0,0,4]
    ```

* Exemplo 2:

    ```bash
    entrada: nums = [1,2,3]
    saída: [1,2,3]
    ```