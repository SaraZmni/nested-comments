import React from "react";
import CommentList from "./components/CommentList";
import EmptyList from "./components/EmptyList";

const App = ({ comments }) => {
  // You should reformat comments based on requirements

  const nodes = comments.map((comment) => {
    return ({...comment,
      children:[],
      depth:0
    })
  })

  
  
  const roots = nodes.filter((node) => node.parentId === null);

  const findChildren = (id) => {
    return nodes.filter(node => node.parentId === id)
  }

  const recusiveTree = (node,depth) => { 
    const children = findChildren(node.id)
    const index = nodes.findIndex((item) => item.id === node.id)
    nodes[index].children = children;
    nodes[index].depth = depth;

    children.forEach(child => {
      recusiveTree(child, depth+1);
  });
}

const finalList=[];

const writeLinear = (node) => {
  finalList.push(node);
  node.children.forEach((child) => {
   writeLinear(child)
  })
  }

 roots.forEach((root) => {
  return recusiveTree(root,0)
  })

roots.forEach((item) => {
    writeLinear(item)
})

  
  return comments !== null ?  <CommentList comments={finalList} /> : <EmptyList/>;
 
};

export default App;
