import { Button, FormControl, FormGroup, FormHelperText, Input, InputLabel } from '@mui/material'
import { Box, color } from '@mui/material'
import React from 'react'

function ContactUs() {
    return (
        <Box
         sx={{
            width: 350,
            height: 350,
        }}
        >
            <FormGroup>
                <FormControl variant="filled" color="primary">
                    <InputLabel htmlFor="name">I'm </InputLabel>
                    <Input id="name" aria-describedby="name-helptext"></Input>
                    <FormHelperText id="name-helptext" >Please do enter your name</FormHelperText>
                </FormControl>
                <FormControl variant="filled">
                    <InputLabel htmlFor="mobile">Catch Me</InputLabel>
                    <Input id="mobile" aria-describedby="mobile-helptext"></Input>
                    <FormHelperText id="mobile-helptext" >You can call me on above Mobile </FormHelperText>
                </FormControl>
                <FormControl variant="filled">
                    <InputLabel htmlFor="email">E-Mail Me @ </InputLabel>
                    <Input id="email" aria-describedby="email-helptext"></Input>
                    <FormHelperText id="email-helptext" >You can Mail Me On </FormHelperText>
                </FormControl>
                <FormControl variant="filled">
                    <InputLabel htmlFor="note">Note </InputLabel>
                    <Input id="note" aria-describedby="note-helptext"></Input>
                    <FormHelperText id="note-helptext" >Describe your Note </FormHelperText>
                </FormControl>
                <br />
                <FormControl>
                    <Button variant="contained"> Contact Me </Button>
                </FormControl>

            </FormGroup>
        </Box>
    )
}

export default ContactUs
