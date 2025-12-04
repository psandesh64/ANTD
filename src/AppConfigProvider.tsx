import React from 'react';
import type { ReactNode } from 'react';
import { ConfigProvider, theme } from 'antd';
import token from './../token.json'
import { flattenTokens } from './utils/utils';

interface AppConfigProviderProps {
  isDarkMode: boolean;
  children: ReactNode;
}

const AppConfigProvider: React.FC<AppConfigProviderProps> = ({ isDarkMode,children }) => {
  const flat = flattenTokens({ obj: token });
  console.log(flat)
  const lightThemeTokens = {
    token: {
      ...flat,
      fontSize: 14,
      fontSizeLG: 16,
      fontSizeSM: 12,
      fontSizeXL: 20,
      fontSizeHeading1: 38,
      fontSizeHeading2: 30,
      fontSizeHeading3: 24,
      fontSizeHeading4: 20,
      fontSizeHeading5: 16,
      lineHeight: 1.5714,
      lineHeightSM: 1.6666,
      lineHeightLG: 1.5,
      lineHeightHeading1: 1.2105,
      lineHeightHeading2: 1.2666,
      lineHeightHeading3: 1.3333,
      lineHeightHeading4: 1.4,
      lineHeightHeading5: 1.5,
      sizeStep: 4,
      sizeUnit: 4,
      marginXXS: 4,
      marginXS: 8,
      marginSM: 12,
      margin: 16,
      marginMD: 20,
      marginLG: 24,
      marginXL: 32,
      marginXXL: 48,
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      padding: 16,
      paddingMD: 20,
      paddingLG: 24,
      paddingXL: 32,
      borderRadiusXS: 2,
      borderRadius: 6,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      boxShadow: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
      boxShadowSecondary: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
      wireframe: false
    },
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: isDarkMode ? theme.useToken().token : lightThemeTokens.token,
      }}  
    >
      {children}
    </ConfigProvider>
  );
};

export default AppConfigProvider;