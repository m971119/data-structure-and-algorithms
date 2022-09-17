// Divide And Conquer
// T: O(nlogn), S: O(n) --> Bigger Space Complexity
// You may never need to implement it in an interview, 
// but you may have to answer how it works

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    // Split array to right and left

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {

}

