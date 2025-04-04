<<<<<<< HEAD
mport React from 'react';
import styled from 'styled-components/native';
import { Avatar } from 'react-native-elements';
import { useAuth } from '../contexts/AuthContext';
import theme from '../styles/theme';

export const HeaderContainer = styled.View`
  background-color: ${theme.colors.background};
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
`;

const Header: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Container>
      <UserInfo>
        <Avatar
          size="medium"
          rounded
          source={{ uri: user.image }}
          containerStyle={styles.avatar}
        />
        <TextContainer>
          <WelcomeText>Bem-vindo(a),</WelcomeText>
          <UserName>{user.name}</UserName>
        </TextContainer>
      </UserInfo>
    </Container>
  );
};

const styles = {
  avatar: {
    backgroundColor: theme.colors.primary,
  },
};

const Container = styled.View`
  background-color: ${theme.colors.background};
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextContainer = styled.View`
  margin-left: 12px;
`;

const WelcomeText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.7;
`;

const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.text};
`;

export default Header;
=======
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import theme from '../styles/theme';

export const HeaderContainer = styled.View`
  background-color: ${theme.colors.primary};
  padding-top: ${StatusBar.currentHeight}px;
  padding: ${theme.spacing.medium}px;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

export const HeaderTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.typography.title.fontSize}px;
  font-weight: ${theme.typography.title.fontWeight};
`;
>>>>>>> 24ae2a53f3e8b0d07a24c4d09ac84d373e765614
