import React, { useEffect, useState } from 'react'
import { Menu } from '../../Components/Menu/Menu'
import { MintButton } from '../../Styles/Buttons/MintButton'
import { Container, WrapperHero } from '../../Styles/Layouts/Container'
import { BlockImage, MintedQuantityText, MintHeadline, MintLive, MintText, QuantityButton, QuantityInput, TopImage, TotalPrice } from '../../Styles/MintingPage.styles'
import CardGif from '../../Assets/Images/card-booker.gif'
import { getLive, getMintedAmount, getPrice, getWhitelist, mintFunction } from '../../utils/moralis'
import { useChain, useMoralis } from 'react-moralis'
import toast, { Toaster } from 'react-hot-toast'

export const MintingPage = () => {

  const [state, setState] = useState(0);
  const [whitelist, setWhiteList] = useState(false);
  const [mintedAmount, setMintedAmount] = useState(0);
  const [active, setActive] = useState('');
  const [price, setPrice] = useState(150);
  const {account, appId, isAuthenticated,isWeb3Enabled,isWeb3EnableLoading, enableWeb3} = useMoralis();
  const { switchNetwork, chainId, chain } = useChain();
  const requiredChain = process.env.REACT_APP_CHAIN_NAME === 'TEST' ? '0x13881': '0x89';

  useEffect(() => {
    getPrice().then(
      (price) => {
          setPrice(price);
      }
    ).catch((error) => {
      console.log(error);
      setPrice(150);
      });

  }, [])

useEffect(() => {
    if(!isAuthenticated){
      setWhiteList(false);
      toast.dismiss();
      return;
    }
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading){
        enableWeb3();
      }
    if (chainId !== requiredChain) {
        switchNetwork(requiredChain)
    }  
  }, [isAuthenticated, isWeb3Enabled, chain]);

  // useEffect(() => {
  //   getLive().then(
  //     (live) => {
  //       setActive(live);
  //     }
  //   ).catch((error) => {
  //     console.log(error);
  //     toast.error('Something went wrong. Please try again later.',{
  //       position: 'bottom-right',
  //       style: {
  //         minWidth: '300px',
  //         fontFamily: 'Lato',
  //         fontSize: '1.5rem',
  //       }
  //     });
  //     setActive('Mint Inactivo');
  //     });

  // }, [])

  useEffect(() => {
    getMintedAmount().then(
      (res) => {
        setMintedAmount(res);
      }
    ).catch((error) => {
      console.log(error);
      setMintedAmount(0);
      });

  }, [])

  // useEffect(() => {
  //   if(!isAuthenticated && !isWeb3EnableLoading && !isWeb3Enabled){
  //     return;
  //   }
  //   console.log(account);
  //   getWhitelist(account).then(
  //     (amount) => {
  //       if(amount > 0){
  //       setWhiteList(true);
  //       toast.success('¡Estás en la Whitelist!', {
  //         id: 'whitelist',
  //         duration: 20000,
  //         style: {
  //           minWidth: '30VW',
  //           fontFamily: 'Lato',
  //           fontSize: '1.5rem',
  //         },
  //       })
  //       }else {
  //         toast.error('No estás en la Whitelist', {
  //           id: 'whitelist',
  //           duration: 20000,
  //           style: {
  //             minWidth: '30VW',
  //             fontFamily: 'Lato',
  //             fontSize: '1.5rem',
  //             }
  //           })
  //         setWhiteList(false);
  //       }

  //     }
  //   ).catch((error) => {
  //     console.log(error);
  //     toast.error('No estás en la Whitelist', {
  //       id: 'whitelist',
  //       duration: 20000,
  //       style: {
  //         minWidth: '30VW',
  //         fontFamily: 'Lato',
  //         fontSize: '1.5rem',
  //         }
  //       })
  //     setWhiteList(false);
  //     });

  // }, [isAuthenticated, account])


  useEffect(() => {

  } , [account, appId, chainId])

  const handleMint = (quantity) => {
    const minting = toast.loading('Minting...', {
      position: 'bottom-right',
      style: {
        minWidth: '30VW',
        fontFamily: 'Lato',
        fontSize: '1.5rem',
      }
    })
    mintFunction(quantity)
    .then(()=> {
      console.log('Minteando...');
      toast.success('¡Has minteado correctamente!', 
        {
          id: minting,
          duration: 5000,
          style: {
            minWidth: '30VW',
            fontFamily: 'Lato',
            fontSize: '1.5rem',
          },
          position: 'bottom-right',
        }
      );
    })
    .catch((error) => {
      console.log(error);
      toast.error(`Hemos encontrado un error en la transaccion: 
                  ${error.data.message}`,{
        id: minting,
        position: 'bottom-right',
        style: {
          minWidth: '30VW',
          fontFamily: 'Lato',
          fontSize: '1.5rem',
        }
      });
    });
  }

  return (
    <div style={{display:"flex", "flexDirection": "column" , "justifyContent":"space-between"}}>
        <Menu  />
        <Container>
          <WrapperHero>
            <TopImage  src={CardGif} alt='card booker' />
            <div>
            <MintLive>{active || 'Mint Activo'}</MintLive>
              <MintHeadline>We are Bookers</MintHeadline>
              <MintText>
                Bookers es una colección de 10.000 NFT’s para los amantes de los libros y el conocimiento.
                Para comprar tu NFT conecta tu cartera, selecciona las unidades que deseas y haz click sobre el botón de Mintear.
              </MintText>

              <article>
                <div>
                  <QuantityButton onClick={()=> setState((prev) => {
                    return prev > 1 ? prev - 1: prev;
                    })}
                  >
                    −
                  </QuantityButton>
                  <QuantityInput 
                  type="number"
                  readOnly 
                  value={state} />
                  <QuantityButton onClick={()=> setState((prev) => {
                    return prev < (20) ? prev + 1: prev;
                    })}
                    >
                    +
                  </QuantityButton>
                </div>
                <TotalPrice>
                      Precio total {price*state} Matic
                </TotalPrice>
              </article>

              <MintButton onClick={()=> handleMint(state)} 
              disabled={!isAuthenticated}>
                Mintear  
              </MintButton>
              <MintedQuantityText>
                {mintedAmount} / 10000 Bookers minteados
              </MintedQuantityText>
              <br/>
              <a href='https://www.moonpay.com/buy' target={'_blank'} rel="noreferrer">
                ¿NECESITAS COMPRAR MATIC? ¡CLICK AQUÍ!
              </a>
            </div>
            <BlockImage  src={CardGif} alt='card booker' />

          </WrapperHero> 
        </Container>
        {/* <Toaster position="bottom-center" gutter={56} /> */}
        <footer>
          <p>
            Created by Bookers Team
          </p>
        </footer>
    </div>
  )
}
