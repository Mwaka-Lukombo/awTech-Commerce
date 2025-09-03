import { Image, Plus, Store } from 'lucide-react'
import {useState, useEffect} from 'react';
import {toast} from 'react-hot-toast';

//productStore
import { productStore } from '../../store/produtcStore';
import {authStore} from '../../store/produtcStore';

export const Produtos = () => {
    const [produto, setProduto] = useState({
        name:"",
        preco:"",
        image:null,
        quantidade:"",
        categoria:"",
        descricacao:""
    })


     const {isLoading,createProduct} = productStore();

    const handleFile = (e)=>{
        const file = e.target.files[0];
        setProduto({...produto,image:file})
    }

    const validationForm = ()=>{
      if(!produto.name){
         toast.error("O campo de nome e obrigatorio!")
      }

      if(!produto.preco){
        toast.error("O campo de preco e obrigatorio!")
      }

      if(!produto.quantidade){
        toast.error("A quantidade e obrigatorio!")
      }

      if(!produto.categoria){
        toast.error("Coloque a categoria");
      }

      if(!produto.descricacao){
        toast.error("Coloque a descricacao do produto!")
      }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        validationForm();
        createProduct(produto)
        setProduto("");
    }
  return (
    <div className='container-produtos'>
        <div className='button-container'>
            <button className='create'>
                <Plus />
            </button>

            <button className='list'> 
                <Store />
            </button>
        </div>

        <div className='create-content'>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome do produto:</span>
                    <input type='text' placeholder='Nome do produto' onChange={(e) => setProduto({...produto,name:e.target.value})} />
                </label>

                <label>
                    <span>Preço:</span>
                    <input type='number' min={0} placeholder='Preço' onChange={(e)=> setProduto({...produto,preco:e.target.value})} />
                </label>

                <label className='file-content' >
                    <span></span>
                    <Image  />
                    <input type='file' accept='image/*' style={{display:'none'}} onChange={handleFile}/>
                </label>

                <label>
                    <span>Quantidade:</span>
                    <input type='number' min={1} placeholder='Quantidade' onChange={(e)=> setProduto({...produto,quantidade:e.target.value})} />
                </label>

                <label>
                    <span>Categoria:</span>
                    <select onChange={(e)=> setProduto({...produto,categoria:e.target.value})}>
                        <option value='Sapatos'>Sapatos</option>
                        <option value='Camisas'>Camisas</option>
                        <option value='Cosmeticos'>Cosmeticos</option>
                    </select>
                </label>

                <label>
                    <span>Descrição:</span>
                </label>
                <textarea placeholder='Descrição' onChange={(e)=> setProduto({...produto,descricacao:e.target.value})}></textarea>
                <input type='submit' value='Cadastrar' /> 
            </form>
        </div>
    </div>
  )
}
