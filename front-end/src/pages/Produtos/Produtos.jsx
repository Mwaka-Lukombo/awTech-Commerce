import { Image, Plus, Store } from 'lucide-react'
import React from 'react'

export const Produtos = () => {
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
            <form>
                <label>
                    <span>Nome do produto:</span>
                    <input type='text' placeholder='Nome do produto' />
                </label>

                <label>
                    <span>Preço:</span>
                    <input type='number' min={0} placeholder='Preço' />
                </label>

                <label>
                    <span>Imagem do Produto:</span>
                    <Image />
                    <input type='file' accept='image/*' style={{display:'none'}} />
                </label>

                <label>
                    <span>Quantidade:</span>
                    <input type='number' min={1} placeholder='Quantidade' />
                </label>

                <label>
                    <span>Categoria:</span>
                    <select>
                        <option value='Sapatos'>Sapatos</option>
                        <option value='Camisas'>Camisas</option>
                        <option value='Cosmeticos'>Cosmeticos</option>
                    </select>
                </label>

                <span>Descrição</span>
                <textarea placeholder='Descrição'></textarea>
                <input type='submit' value='Cadastrar' /> 
            </form>
        </div>
    </div>
  )
}
