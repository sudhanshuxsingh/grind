const isAnagrams = (a, b) => {
    const anagramMap = new Array(26).fill(0);
    for (let ch of a) {
        const index = ch.charCodeAt(0) - "a".charCodeAt(0);
        anagramMap[index]++;
    }
    for (let ch of b) {
        const index = ch.charCodeAt(0) - "a".charCodeAt(0);
        anagramMap[index]--;
    }
    return anagramMap.toString() == (new Array(26).fill(0));
}
const funWithAnagrams = (arr) => {
    if (arr.length < 2) return arr;
    const st = [];
    st.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if (!isAnagrams(st[st.length - 1], arr[i])) {
            st.push(arr[i])
        }
    }
    return st.sort();
}

const str = ['code', 'doce', 'ecod', 'framer', 'frame'];
console.log(funWithAnagrams(str))


/**
---

### 1. Fun with Anagrams

Two strings are anagrams if they are permutations of each other. In other words, both strings have the same size and the same characters. For example, **"aaagmnrs"** is an anagram of **"anagrams"**. Given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in **sorted order**.

### Example  
**str = ['code', 'doce', 'ecod', 'framer', 'frame']**

- **"code"** and **"doce"** are anagrams. Remove **"doce"** from the array and keep the first occurrence **"code"** in the array.
- **"code"** and **"ecod"** are anagrams. Remove **"ecod"** from the array and keep the first occurrence **"code"** in the array.
- **"code"** and **"framer"** are not anagrams. Keep both strings in the array.
- **"framer"** and **"frame"** are not anagrams due to the extra **'r'** in **"framer"**. Keep both strings in the array.
- Order the remaining strings in **ascending order**:  
  ✅ Output: **["code", "frame", "framer"]**

---

### **Function Description**
Complete the function **`funWithAnagrams`** in the editor below.  

- The function is expected to return a **STRING_ARRAY**.  
- The function accepts **STRING_ARRAY text** as a parameter.  

**Function Signature:**  
```python
funWithAnagrams(text):
    # Write your code here
```

---

Would you like me to solve this problem for you in **Python** or **JavaScript**? 🚀🙂  
*/