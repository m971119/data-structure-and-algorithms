class Node:
    def __init__(self, value: int) -> None:
        self.left = None
        self.right = None
        self.value = value

class BinarySearchTree:
    def __init__(self) -> None:
        self.root = None
    
    def lookup(self, value: int):
        current_node = self.root
        while not (current_node is None):
            if current_node.value == value:
                return current_node
            if value > current_node.value:
                current_node = current_node.right
            else:
                current_node = current_node.left
        return False
    
    def insert(self, value): 
        new_node = Node(value)
        if self.root is None:
            self.root = new_node
            return self
        current_node = self.root
        while True:
            if value < current_node.value:
                if current_node.left is None:
                    current_node.left = new_node
                    return self
                current_node = current_node.left
            else:
                if current_node.right is None:
                    current_node.right = new_node
                    return self
                current_node = current_node.right
        return self
    
    def breadth_first_search(self):
        """
        Maintain queue to track nodes
        (Takes up more memory)
        """
        current_node = self.root
        list = []
        queue = []
        queue.append(current_node)
        while len(queue) > 0:
            # pop the queue
            current_node = queue[0]
            queue = queue[1:]
            list.append(current_node.value)
            if current_node.left:
                queue.append(current_node.left)
            if current_node.right:
                queue.append(current_node.right)
        return list
    
    def breadth_first_search_recurrsion(self, queue, list):
        if len(queue) == 0:
            return list
        # pop the queue
        current_node = queue[0]
        queue = queue[1:]
        list.append(current_node.value)
        if current_node.left:
            queue.append(current_node.left)
        if current_node.right:
            queue.append(current_node.right)
        return self.breadth_first_search_recurrsion(queue, list)
    
    def depth_first_search_in_order(self):
        return self.traverse_tree_in_order(self.root, [])

    def traverse_tree_in_order(self, node, list):
        if node.left:
            self.traverse_tree_in_order(node.left, list)
        list.append(node.value)
        if node.right:
            self.traverse_tree_in_order(node.right, list)
        return list


    def depth_first_search_pre_order(self):
        return self.traverse_tree_pre_order(self.root, [])

    def traverse_tree_pre_order(self, node, list):
        list.append(node.value)
        if node.left:
            self.traverse_tree_pre_order(node.left, list)
        if node.right:
            self.traverse_tree_pre_order(node.right, list)
        return list

    def depth_first_search_post_order(self):
        return self.traverse_tree_post_order(self.root, [])

    def traverse_tree_post_order(self, node, list):
        if node.left:
            self.traverse_tree_post_order(node.left, list)
        if node.right:
            self.traverse_tree_post_order(node.right, list)
        list.append(node.value)
        return list
       
def main():
    my_tree = BinarySearchTree()
    my_tree.insert(5)
    my_tree.insert(6)
    my_tree.insert(4)
    my_tree.insert(7)

    my_node = my_tree.root
    print(my_node.value)
    print(my_node.left.value)
    print(my_node.right.value)

    print(my_tree.breadth_first_search())
    print(my_tree.breadth_first_search_recurrsion([my_tree.root], []))
    print(my_tree.depth_first_search_in_order())
    print(my_tree.depth_first_search_in_order_2())
    print(my_tree.depth_first_search_pre_order())
    print(my_tree.depth_first_search_post_order())

if __name__ == "__main__":
    main()