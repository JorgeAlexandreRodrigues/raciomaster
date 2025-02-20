import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MonthSelect = ({ data, setData }) => {
    const handleChange = (event) => {
        setData({
            ...data,
            month: event.target.value
        });
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Mês do Balancete</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.month}
                label="month"
                onChange={handleChange}
                fullWidth
                size="small"
                sx={{ mt: 0.5, mb: 0.5, ml: 1, mr: 1 }}
            >
                <MenuItem value={1}>Janeiro</MenuItem>
                <MenuItem value={2}>Fevereiro</MenuItem>
                <MenuItem value={3}>Março</MenuItem>
                <MenuItem value={4}>Abril</MenuItem>
                <MenuItem value={5}>Maio</MenuItem>
                <MenuItem value={6}>Junho</MenuItem>
                <MenuItem value={7}>Julho</MenuItem>
                <MenuItem value={8}>Agosto</MenuItem>
                <MenuItem value={9}>Setembro</MenuItem>
                <MenuItem value={10}>Outubro</MenuItem>
                <MenuItem value={11}>Novembro</MenuItem>
                <MenuItem value={12}>Dezembro</MenuItem>
            </Select>
        </FormControl>
    )
}

export default MonthSelect