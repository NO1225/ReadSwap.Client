import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from "../../components/themed/View"
import { Text } from "../../components/themed/Text"
import { FontSize } from '../../constants/FontSize'
import validator from 'validator'
import { useLocalErrorMessage } from '../../hooks/useLocalErrorMessage'
import { addBookService } from '../../services/apiCalls/book/addBookService'
import { signOut } from '../../services/navigation/signOut'
import InputWithLabel from '../../components/customComponent/InputWithLabel'
import { useLocale } from '../../hooks/useLocale'
import IconButton from '../../components/customComponent/IconButton'
import StagesLayout from '../../components/layouts/StagesLayout'
import { StackNavigationProp } from '@react-navigation/stack'

export default function NewBookScreen({navigation}:{navigation:StackNavigationProp<CollectionParamList,"NewBookScreen">}) {
    const styles = StyleSheet.create({
        container: {
            paddingTop: 35,
            alignItems: "center",
        },

        titleText: {
            fontSize: FontSize.Large
        },


        center: {
            width: '100%',
            alignItems: "center",
            justifyContent: "center"
        },
        flex1: {
            flex: 1
        },
        rowFlex: {
            flexDirection: "row"
        },
        spaceBetween: {
            justifyContent: "space-between"
        },
        fullWidth: {
            width: '100%'
        }
    })


    const [title, setTitle] = useState<string>("");
    const [titleErrorMessage, setTitleErrorMessage] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [authorErrorMessage, setAuthorErrorMessage] = useState<string>("");
    const [year, setYear] = useState<number>(2000);
    const [yearErrorMessage, setYearErrorMessage] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState<string>("");

    const [condition, setCondition] = useState<number>(0);
    const [conditionErrorMessage, setConditionErrorMessage] = useState<string>("");

    const [bookId, setBookId] = useState<number>(0);

    const checkTitle = async (): Promise<boolean> => {
        setTitleErrorMessage("");
        if(validator.isEmpty(title))
        {
            setTitleErrorMessage(useLocalErrorMessage({},"required"));
            return false;
        }
        if(validator.isLength(title,{min:0,max:200}) == false)
        {
            setTitleErrorMessage(useLocalErrorMessage({},"lengthMustBeLess") + "200");
            return false;
        }
        return true;
    }

    const checkAuthor = async (): Promise<boolean> => {
        setAuthorErrorMessage("");
        if(validator.isLength(author,{min:0,max:50}) == false)
        {
            setTitleErrorMessage(useLocalErrorMessage({},"lengthMustBeLess") + "50");
            return false;
        }
        return true;
    }

    const checkDescription = async (): Promise<boolean> => {
        setDescriptionErrorMessage("");
        if(validator.isLength(description,{min:0,max:400}) == false)
        {
            setDescriptionErrorMessage(useLocalErrorMessage({},"lengthMustBeLess") + "400");
            return false;
        }
        return true;
    }

    const checkCondition = async (): Promise<boolean> => {
        setConditionErrorMessage("");
        if(condition <0 || condition>10)
        {
            setConditionErrorMessage(useLocalErrorMessage({},"valueMustBeLess") + "10");
            return false;
        }
        return true;
    }

    const addBook = async (): Promise<boolean> => {        

        let response = await addBookService(
            {
                author,
                condition,
                description,
                title,
                year
            }
        )

        if(response == null)
        {
            signOut();
            return false;
        }
        if(response.success)
        {
            setBookId(response.data.bookId);
        }
        return response.success;
    }


    const onSuccess = () => {
        navigation.pop();
        //signIn();
    }

    const Stages: Stage[] = [
        {
            Component: (nextHundler, backHundler, finishHundler) =>
                (<View style={[
                    styles.flex1,
                    styles.center
                ]}>
                    <View style={styles.center}>
                        <InputWithLabel
                            errorMessage={titleErrorMessage}
                            label={useLocale({}, "titleLabel")}
                            setValue={(value: string) => setTitle(value)}
                            value={title}
                            placeholder={useLocale({}, "titleLabel")}
                        />
                    </View>
                    <View>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-left" : "arrow-right"} onClick={nextHundler} />
                    </View>

                </View>),
            Verifyier: checkTitle,
            Submit: async () => true
        },
        {
            Component: (nextHundler, backHundler, finishHundler) =>
                (<View style={[
                    styles.flex1,
                    styles.center
                ]}>
                    <View style={styles.center}>
                        <InputWithLabel
                            errorMessage={authorErrorMessage}
                            label={useLocale({}, "authorLabel")}
                            setValue={(value: string) => setAuthor(value)}
                            value={author}
                            placeholder={useLocale({}, "authorLabel")}
                        />
                    </View>
                    <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-right" : "arrow-left"} onClick={backHundler} />
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-left" : "arrow-right"} onClick={nextHundler} />
                    </View>

                </View>),
            Verifyier: checkAuthor,
            Submit: async () => true
        },
        {
            Component: (nextHundler, backHundler, finishHundler) =>
                (<View style={[
                    styles.flex1,
                    styles.center
                ]}>
                    <View style={styles.center}>
                        <InputWithLabel
                            errorMessage={yearErrorMessage}
                            label={useLocale({}, "yearLabel")}
                            setValue={(value: string) => setYear(parseInt(value))}
                            numbersOnly
                            value={""+year}
                            placeholder={useLocale({}, "yearLabel")}
                        />
                    </View>
                    <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-right" : "arrow-left"} onClick={backHundler} />
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-left" : "arrow-right"} onClick={nextHundler} />
                    </View>

                </View>),
            Verifyier: async ()=>true,
            Submit: async () => true
        },
        {
            Component: (nextHundler, backHundler, finishHundler) =>
                (<View style={[
                    styles.flex1,
                    styles.center
                ]}>
                    <View style={styles.center}>
                        <InputWithLabel
                            errorMessage={descriptionErrorMessage}
                            label={useLocale({}, "descriptionLabel")}
                            setValue={(value: string) => setDescription(value)}
                            value={description}
                            placeholder={useLocale({}, "descriptionLabel")}
                        />
                    </View>
                    <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-right" : "arrow-left"} onClick={backHundler} />
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-left" : "arrow-right"} onClick={nextHundler} />
                    </View>

                </View>),
            Verifyier: checkDescription,
            Submit: async () => true
        },
        {
            Component: (nextHundler, backHundler, finishHundler) =>
                (<View style={[
                    styles.flex1,
                    styles.center
                ]}>
                    <View style={styles.center}>
                        <InputWithLabel
                            errorMessage={conditionErrorMessage}
                            label={useLocale({}, "conditionLabel")}
                            setValue={(value: string) => setCondition(parseInt(value))}
                            numbersOnly
                            value={""+condition}
                            placeholder={useLocale({}, "conditionLabel")}
                        />
                    </View>
                    <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-right" : "arrow-left"} onClick={backHundler} />
                        <IconButton locked name="check" onClick={finishHundler} />
                    </View>

                </View>
                ),
            Verifyier: checkCondition,
            Submit: addBook
        }
    ]
    return (
        <View style={[
            styles.container,
            styles.flex1
        ]}>
            <View >
                <Text style={styles.titleText}>{useLocale({}, "addNewBookHeader")}</Text>
            </View>

            <StagesLayout Stages={Stages} onFinish={onSuccess} />

        </View>
    )
}

const styles = StyleSheet.create({})
