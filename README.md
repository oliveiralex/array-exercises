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

#### Encontre Números com Número Par de Dígitos ([<small>Leetcode</small>](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/))

Dado um array nums de inteiros, retorne quantos deles contêm um número par de dígitos.

* Exemplo 1:

    ```bash
    entrada: nums = [12,345,2,6,7896]
    saída: 2
    ```

    <small>**Explicação:**
    <br> **12** contém 2 dígitos (número par de dígitos).
    <br> **345** contém 3 dígitos (número ímpar de dígitos).
    <br> **2** contém 1 dígito (número ímpar de dígitos).
    <br> **6** contém 1 dígito (número ímpar de dígitos).
    <br> **7896** contém 4 dígitos (número par de dígitos).
    <br> Portanto, apenas 12 e 7896 contêm um número par de dígitos.
    </small>

* Exemplo 2:

    ```bash
    entrada: nums = [555,901,482,1771]
    saída: 1
    ```

    <small>**Explicação:**
    <br> Apenas o número 1771 tem um número par de dígitos.
    </small>

#### Encontrar vendedor com maior valor de venda ([<small>arquivo json</small>](https://gist.github.com/oliveiralex/ad6630b18e6d01a8a22eec29e6e7889b))

Dado um array de vendedores, cada um representado por um objeto com o nome do vendedor `name` e o valor de suas vendas `amount`, crie uma função para encontrar e retornar o vendedor que obteve o maior valor de venda.

<small>Utilize o seguinte arquivo para o problema: [seller.json](https://gist.github.com/oliveiralex/ad6630b18e6d01a8a22eec29e6e7889b)
</small>

#### Quadrados de um Array Ordenado ([<small>Leetcode</small>](https://leetcode.com/problems/squares-of-a-sorted-array/))

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

#### Duplicar zeros ([<small>Leetcode</small>](https://leetcode.com/problems/duplicate-zeros/))

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

#### Merge arrays ([<small>Leetcode</small>](https://leetcode.com/problems/merge-sorted-array/))

Dado dois arrays de números inteiros `nums1` e `nums2`, ordenados em ordem crescente, sendo `m` e `n` seus tamanhos, respectivamente.

Junte os arrays `nums1` e `nums2` em um único array ordenado de forma crescente.

O array final ordenado não deve ser retornado pela função, mas sim armazenado dentro do array `nums1`. Para acomodar os elementos, `nums1` possui um comprimento de `m + n`.

* Exemplo 1:

    ```bash
    entrada: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    saída: [1,2,2,3,5,6]
    ```
    <small>**Explicação:** Os arrays que queremos juntar são [1,2,3] e [2,5,6]. O resultado ao fazer o merge é [1,2,2,3,5,6]</small>

* Exemplo 2:

    ```bash
    entrada: nums1 = [1], m = 1, nums2 = [], n = 0
    saída: [1]
    ```
    <small>**Explicação:** Os arrays que queremos juntar são [1] e []. O resultado ao fazer o merge é [1]</small>

* Exemplo 3:

    ```bash
    entrada: nums1 = [0], m = 0, nums2 = [1], n = 1
    saída: [1]
    ```
    <small>**Explicação:** Os arrays que queremos juntar são [] e [1]. O resultado ao fazer o merge é [1]</small>

#### Remover elementos ([<small>Adaptado leetcode</small>](https://leetcode.com/problems/remove-element/))

Dado um array de números inteiros `nums` e um inteiro `val`, remova todas as ocorrências de `val` em `nums`. Em seguida, retorne o array.

O array resultante deve ter o seu tamanho reduzido de acordo com o número de elementos removidos.

Utilize a abordagem *in-place*, na qual a modificação é feita no próprio array.

* Exemplo 1:

    ```bash
    entrada: nums = [3,2,2,3,4,2,7,9], val = 2
    saída: [3,3,4,7,9]
    ```

    <small>**Explicação:** Dado o array `nums` [3,2,2,3,4,2,7,9] de tamanho 8 e o `val` igual a 2, queremos remover todas as ocorrências de `val` em `nums`. Desta forma, teremos o array resultante [3,3,4,7,9] de tamanho 5.</small>

* Exemplo 2:

    ```bash
    entrada: nums = [0,1,2,2,3,0,4,2], val = 2
    saída: [0,1,3,0,4]
    ```

#### Contém valores duplicados ([<small>Leetcode</small>](https://leetcode.com/problems/contains-duplicate/))

Dado um array de números inteiros `nums`, retorne `true` se houver valores repetidos ou `false` se não houver repetição de valores no array.

* Exemplo 1:

    ```bash
    entrada: nums = [1,2,3,1]
    saída: true
    ```

* Exemplo 2:

    ```bash
    entrada: nums = [1,2,3,4]
    saída: false
    ```

* Exemplo 3:

    ```bash
    entrada: nums = [1,1,1,3,3,4,3,2,4,2]
    saída: true
    ```

#### Comerciante

Um comerciante deseja fazer o levantamento do lucro das mercadorias que ele comercializa. Foi disponiblizado um [arquivo no formato JSON](https://gist.github.com/oliveiralex/4b9807de61d9929218a1221a25c92218) com os dados das mercadorias, incluindo **nome do produto**, **preço de compra** e **preço de venda**. Faça um programa e descreva quantas mercadorias proporcionaram:

- **lucro** < 10%
- 10% ≤ **lucro** ≤ 20%
- **lucro** > 20%

Arquivo disponiblizado no arquivo [<small>comerciante.json</small>](https://gist.github.com/oliveiralex/4b9807de61d9929218a1221a25c92218)

* **Exemplo**: Considerando os dados disponibilizados no arquivo, a saída esperada é a seguinte:

    - *Lucro abaixo de 10%: 1*
    - *Lucro entre 10% e 20%: 2*
    - *Lucro acima de 20%: 1*
    - *Valor total de compra: 30.00*
    - *Valor total de venda: 33.50*
    - *Lucro total: 3.50*




