import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View>
			<Image
				source={require("../../assets/images/welcome1.png")}
				style={{ marginTop: 30, width: "100%", height: 400 }}
			/>

			<Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold", textAlign: "center" }}>
				40K+ Premium Recipes
			</Text>

			<Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 44,
					marginBottom: 40,
					textAlign: "center"
				}}
			>
				Cook Like A Chef
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "100%",
					alignItems: "center"
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>
		</View >
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	main: {
		flex: 1, alignItems: "center"
	}
});
