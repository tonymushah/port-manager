import { Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NavBar(){
    const navigate = useNavigate();
    return (
        <HStack>
            <Button onClick={() => navigate("/")} colorScheme="red">
                Home
            </Button>
            <Button onClick={() => navigate("/bateaux")} colorScheme="cyan">
                Bateaux
            </Button>
            <Button onClick={() => navigate("/previsions")} colorScheme="cyan">
                Previsions
            </Button>
            <Button onClick={() => navigate("/quais")} colorScheme="cyan">
                Quais
            </Button>
            <Button onClick={() => navigate("/factures")} colorScheme="cyan">
                Factures
            </Button>
            <Button onClick={() => navigate("/configuration")} colorScheme="cyan">
                Configuration
            </Button>
        </HStack>
    )
}