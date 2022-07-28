import React from 'react'
import ParticlesJS from '../utils/Particles.js';
import { Stack, Box, Typography, TextBox } from '@mui/material'

const TranslationBody = () => {
  return (
    <Stack>
        <ParticlesJS />
        <Typography zIndex="99">
            Hello
        </Typography>
    </Stack>
  )
}

export default TranslationBody