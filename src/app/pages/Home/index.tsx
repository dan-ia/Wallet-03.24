import { View, ScrollView } from "react-native";
import { styles } from "./styles";

import Title from "@/components/Title";
import Header from "@/components/Header";
import { COINS } from "@/utils/dataCoins";
import TotalBalance from "@/components/TotalBalance";
import { ListCoinsHome } from "@/components/ListCoinsHome/Index";

export default function Coins() {
    return (
        <View style={styles.container}>
            <Header />

            <TotalBalance price={'$1303.24'} button='Deposit' pnl="" pnln="" />

            <Title text="Criptos" />

            <ScrollView>
                <>
                    {COINS.map((coin) => (
                        <ListCoinsHome
                            key={coin.id}
                            title={coin.title}
                            ico={coin.ico}
                            acronym={coin.acronym}
                            price={coin.price} 
                            valuation={coin.valuation} id="" />
                    ))}
                </>
            </ScrollView>
        </View>
    )
}

