import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #000000;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;

export const SearchArea = styled.View`
    background-color: #FFFFFF;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000000;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 32px;
    height: 32px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px
`;

export const ListArea = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
`;