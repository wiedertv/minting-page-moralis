import React, { useEffect } from 'react'
import { useMoralis } from 'react-moralis';
import { AuthenticationButtonStyled } from '../../Styles/Buttons/AuthenticationButton.styles';
import metamaskLogo from '../../Assets/Images/metamask.png';
export const AuthenticationButton = ({mobile}) => {
  const { 
    authenticate, 
    isAuthenticated,
    isWeb3EnableLoading,
    isWeb3Enabled,
    logout, 
    account } = useMoralis();

    const handleClick = () => {
      if(isAuthenticated){
        logout();
      }else{
        authenticate();
      }
    }

    useEffect(() => {
      if(isAuthenticated && !isWeb3EnableLoading && !isWeb3Enabled){
        logout()
      }
    }, [isAuthenticated, account]);

  return (
    <AuthenticationButtonStyled
      mobile={mobile} 
      onClick={handleClick}
      authenticated={isAuthenticated} 
      >
        <img src={metamaskLogo} alt='metamask' />
       {isAuthenticated ? "Desconectar Wallet" : "Conectar Wallet"}
    </AuthenticationButtonStyled>
  )
}
