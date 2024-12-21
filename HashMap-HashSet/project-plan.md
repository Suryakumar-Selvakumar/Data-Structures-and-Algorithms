**Given your inputs, what are the steps necessary to return the desired output?**

**IMP:** Whenever you access a bucket through an index, check if it exists. You want to throw an error if you try to access an out of bound index.

0.  Create a hashMap class or factory function. The constructor should have the buckets array, const buckets = []; For now, that’s the only thing that I can think of, add more properties for the object later on if you need to.

    0.5. It maybe worth it to reuse the linkedList class and Node class from previous project. Maybe refactor it a bit to suit this one.

1.  function hash(key) - You can use that simple hashing formula that uses a prime no, length of key and the capacity of the HashMap. Add a modulo operator in the line that calculates the hashcode, mod buckets.length. Just use this.buckets.length, no need to take in the array as the parameter.

2.  function set(key, value) – This function sets the key-value pair to a bucket. First, check if the key already exists in the buckets array inside a bucket, you can use the hash function to get the key’s hash and use it to check this. If it does, then update its value with the argument value’s value. You’d have to iterate through the linkedList to check if the key exists, maybe add another check that checks if the bucket has a linkedList before trying to iterate through the linkedList.

    2.1. If the a key is infact different to the one that already exists, then create a linkedList and add the key-value pair as a node to it at the end.

    2.2. You do have to grow the buckets array’s size inside set() function but wait until you’re done with the other functions as their code could be reused in here to grow the buckets array. I’ll just have to wait until I have that eureka moment. Refer to 6.

        2.2.1. I need to calculate the growth factor. How? Done by multiplying capacity and loadfactor.

        2.2.2. I need to create a buckets list that’s double the size of the old buckets array and copy over those items to this one. How? First iterate starting from 0 to the size of capacity which is now doubled. Create linkedList objects for each of the bucket.

        2.2.3. Then after you have a new array with twice as many buckets, now you have copy over all the linkedLists and keys to this array.

3.  get(key) – This returns the value of the key from the buckets array. Use the hash function to get the same hash again. This will be the index of your bucket. Then you can use direct array indexing to check if the key exists in that index, you’d use linkedList traversal function to achieve this since the bucket is a linkedList. If it does, then return the value of the key. If the key doesn’t exist, then just return null.

4.  has(key) – Same thing. Use hash function on key to get hash code. Use hash code as index in buckets array to access the bucket. Iterate through its linkedList and check if it has the key provided in the argument. If it does, then return true, else return false.

5.  remove(key) – Same logic as before. Use hash function → get hash code → use it as index in buckets array → Iterate through linkedList → Use linkedList object’s delete method to delete the key, you might have to create that method and test it first → return true.

    5.1. If the key is not in the hash map, then return false.

6.  length() - I have to return the stored keys in the hash map. How can I do this? First, iterate through the entire buckets array. For each bucket (linkedList), iterate through it using its method, grab each of the keys and push them into a different array. Then simply return the length of this array. Maybe even create a seperate function to do this for you. This is probably what you can use inside the set() function to calculate if the buckets array should grow.

7.  clear() - Simpler than it sounds. First, iterate through the buckets array. For each bucket, just make the head of the linkedList equal to null and that should delete the entire chain in the bucket.

8.  keys() - Use the same logic as in length(), except this time, instead of returning the length of the array, return the array itself. Its the array full of keys.

9.  values() - Use the same logic as in length() but this time, instead of pushing the keys into the new array, push the values instead. Then you can just return this values array.

10. entries() - Use the same logic as in length() till linkedList iteration, and then create a keyValueArray for each iteration and push the key and value of each node inside this array. Then push this keyValueArray inside another entriesArray who holds/will hold all the entries. Then just return the entriesArray.

**How would you change the project for the HashSet?**

0.5. Create hashSet.js, copy everything from hashMap.js and refactor each of its functions as and when needed. Create a class NodeSet that only takes a key, nextNode and creates a object

1. Hashing function shouldn't change at all as it only involves the key.

2. Set() - How will the Set() function change? The logic will remain the same mostly but,

   i) You have to update append() and prepend() functions. Add an if check that checks if value is undefined. If it is, then create a node with NodeSet() class.

   ii) The growth logic will change slightly. Iterate as usual through the buckets arrays but instead of calling fetchEntries, call fetchKeys and just assign everything from the returned keysArray using append. Rest of the logic should be the same

3. get() - I don't think this function is even needed. There is no value to get for any of the keys

4. has(key) - You can use the exact same function I think.

5. remove(key) - You can use the same function

6. length() - You can use the same function.

7. clear() - Just iterate through the entire buckets array and delete the head for each bucket.

8. keys() - Kept the same I think.

9. values() - There are no values to return. So there's no need to implement this function.

10. entries() - keys() function will return all the keys, there are no values so there are no entries to return. This function isn’t needed.

BUGS

1. There’s something wrong with the updation logic for the linkedList. Find out what exactly is wrong. Possible cases:
   i) Set func is wrong -

   ii) get func is wrong

   iii) fetchValue func is wrong

   iv) updateKeyValue func is wrong – This was the culprit

   iv) contains func is wrong – Works Fine!!
