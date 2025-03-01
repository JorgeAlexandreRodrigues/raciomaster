import { Container, Grid, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import MonthSelect from "./components/MonthSelect";
import RaciosCalculate from "./components/RaciosCalculate";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    sales: 0,
    services: 0,
    subsidies: 0,
    cogs: 0,
    externalServices: 0,
    staff: 0,
    inventoryLoss: 0,
    receivablesLoss: 0,
    otherIncome: 0,
    otherExpenses: 0,
    month: 1,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <RaciosCalculate data={data} setData={setData} />
            <Box mt={2}> {/* Adiciona margem superior ao MonthSelect */}
              <MonthSelect data={data} setData={setData} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
