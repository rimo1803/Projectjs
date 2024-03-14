import { useContext } from "react";
import { seatData } from "../Seat";
import { MovieContext } from "../context/BookingContext";
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell,  Container, Box, Typography, Button, Divider } from "@mui/material";

import { useNavigate } from "react-router-dom"

const BookTicket2 = () => {
    const navigate = useNavigate();
    const { checkedList, handleSelect, totalAmount, movieData } = useContext(MovieContext);
    let result = totalAmount()
    console.log(movieData);
    const moviedetails = movieData;
    const paymentPage = () => {
        navigate("/payment");
    }
    return (
        <>
            <Container>
            <Typography gutterBottom variant="h4" component="div" color="#990000" mt={2}>
    MOVIE : {moviedetails.title}
</Typography>

                <TableContainer>
                    <Table style={{ width: 10 }} color="primary">
                        <TableHead >
                            <TableCell ></TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell></TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>6</TableCell>
                            <TableCell>7</TableCell>
                            <TableCell>8</TableCell>
                            <TableCell>9</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>11</TableCell>
                            <TableCell>12</TableCell>
                            <TableCell>13</TableCell>
                            <TableCell>14</TableCell>
                            <TableCell>15</TableCell>
                            <TableCell>16</TableCell>
                            <TableCell></TableCell>
                            <TableCell>17</TableCell>
                            <TableCell>18</TableCell>
                            <TableCell>19</TableCell>
                            <TableCell>20</TableCell>
                        </TableHead>
                        <TableBody >

                            {seatData.map(item => (
                                <TableRow sx={{ "& td": { border: 0 } }} key={item.id}>
                                    <TableCell >{item.section}</TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat1}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat2}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat3}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat4}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat5}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat6}
                                        onChange={handleSelect}
                                    />
                                    </TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat7}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat8}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat9}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat10}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat11}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat12}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat13}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat14}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat15}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat16}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat17}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat18}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat19}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat20}
                                        onChange={handleSelect}
                                    /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Container>

            <Divider />
            <Box textAlign='center' mt={1} >
                <Typography gutterBottom variant="p" component="div" color="#f23a07" mt={2} >
                   

                </Typography>

            </Box>

            <Box textAlign='center' mt={3} onClick={() => paymentPage()}>
                <Button
                    sx={{
                        color: 'white', backgroundColor: '#990000', width: 300, ':hover': {
                            bgcolor: 'black',
                            color: 'white',
                        }
                    }}
                >PAY {result}

                </Button>
            </Box>

        </>
    )
}


export default BookTicket2