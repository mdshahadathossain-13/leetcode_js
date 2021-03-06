let map;

let inOrder = (root,level) => {
    if (root == null)
        return [];
    if(!(level in map))
        map[level] = [];
    map[level].push(root.val);
    return [...inOrder(root.left, level+1), root.val, ...inOrder(root.right, level+1)];
}

var deepestLeavesSum = function(root) {
    map = {};
    inOrder(root,0);
    return map[Math.max(...Object.keys(map))].reduce((prev,curr) => prev+curr,0)
};