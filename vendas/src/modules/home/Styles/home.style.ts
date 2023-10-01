import styled from "styled-components/native";
import { theme } from "../../../shared/themes/themes";

interface CategoryFilterIconBoxProps {
  isSelected?: boolean
}

export const ContainerHome = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.neutralTheme.white};
  align-items: center;
  padding: 16px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const CategoryFilterBox = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  padding: 2px 2px;
  margin-bottom: 25px;
`

export const CategoryFilterTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #5b9279;
`
export const CategoryFilterIconBox = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  backgroundColor: ${({ isSelected }: { isSelected: boolean }) => (isSelected ? "#5b9279" : "#fff")};
`
export const MainTitle = styled.Text`
  font-size: 35px;
  margin-bottom: 30px;
`

export const ListAnimalView = styled.ScrollView`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
`

export const ListAnimalMainBox = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  border-radius: 14px;
  background-color: #71DBD2;
  margin-bottom: 20px;
`

export const AnimalImage = styled.Image`
  background-color: #F18809;
  overflow: hidden;
  width: 100px;
  height: 100px;
`

export const ListAnimalDescriptionInfo = styled.View`
  width: 100%;  
  display: flex;
  flex: 1;
  padding: 20px 20px;
  
`

export const ListAnimalTitle = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 20px;
`

export const ListAnimalDescriptionBox = styled.View`
`
