import api from "./api";

export async function getTree() {
    const { data } = await api.get("/tree");
  
    return data;
  }
  
  export async function deleteTree(_id) {
    const { data } = await api.delete(`/tree/${_id}`);
  
    return data;
  }
  
  export async function updateTree({ _id, newData }) {

    const price = [
      parseFloat(newData?.price1),
      parseFloat(newData?.price2),
      parseFloat(newData?.price3),
    ];
    const newTree = { ...newData, price: price };
    console.log(newTree?.total_quantity);
    delete newTree.price1, delete newTree.price2, delete newTree.price3;
    const { data } = await api.put(`/tree/${_id}`, newTree);
  
    return data;
  }
  
  export async function postTree(newTrees) {
    const price = [
      parseFloat(newTrees?.price1),
      parseFloat(newTrees?.price2),
      parseFloat(newTrees?.price3),
    ];
  
    const tree = { ...newTrees, price: price };
    delete tree.price1, delete tree.price2, delete tree.price3;
  
    const { data } = await api.post(`/tree`, tree);
  
    return data;
  }