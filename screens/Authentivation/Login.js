import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import {AuthLayout} from "../Authentivation/AuthLayout";

import {FONTS, SIZES, COLORS, icons } from "../../constants/Index";

import FormInput from "../../Components/FormInput";



const Login = () => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    
    return (

        <AuthLayout

            title= "Let's Sign You In"
            subtitle= "Welcome Back, you've been missed"
            
        >

            <View
                style = {{
                    flex :1,
                    marginTop : SIZES.padding * 2
                }}
            >

                
          {/* FormInput */}
          <FormInput
                label = "Email"
                keyboardType = "email-address"
                autoCompleteType = "email"
                onChange = {(value) => {
                    //validate email
                    setEmail(value)

                }}
                errorMsg = {emailError}
                appendComponent = {
                    <View
                        style = {{
                            justifyContent : 'center'

                        }}
                    >
                        <Image
                            source={icons.correct}
                            style = {{
                                height: 20,
                                width:20,
                                tintColor: COLORS.darkGreen

                            }}

                        />
                    </View>
                }

          />

          {/* save me & Forgot Password */}


          {/* Sign In */}

          {/* Sign Up */}


            </View>
        </AuthLayout>

    )
}

export default Login;