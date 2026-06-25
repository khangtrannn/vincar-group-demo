import { useMemo, useState } from 'react'
import { Box, HStack, Image, Text, VStack, chakra } from '@chakra-ui/react'
import { Vehicle, VehicleImage } from '../../types/vehicle'

type VehicleGalleryProps = {
  vehicle: Vehicle
}

function getGalleryImages(vehicle: Vehicle): VehicleImage[] {
  const sortedImages = [...vehicle.images].sort((a, b) => {
    if (a.sortOrder !== b.sortOrder) {
      return a.sortOrder - b.sortOrder
    }

    return a.id.localeCompare(b.id)
  })

  if (sortedImages.length > 0) {
    return sortedImages
  }

  if (vehicle.imgUrl) {
    return [
      {
        id: 'fallback',
        url: vehicle.imgUrl,
        sortOrder: 1,
        isPrimary: true,
      },
    ]
  }

  return []
}

export function VehicleGallery({ vehicle }: VehicleGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const images = useMemo(() => {
    return getGalleryImages(vehicle)
  }, [vehicle])

  const selectedImage = images[selectedIndex]

  if (!selectedImage) {
    return null
  }

  return (
    <Box
      display={{ base: 'block', md: 'grid' }}
      gridTemplateColumns={{ md: '130px 1fr' }}
      gap={{ base: 3, md: 4 }}
      alignItems="stretch"
    >
      <Box
        position="relative"
        display={{ base: 'none', md: 'block' }}
        h="590px"
        overflow="hidden"
      >
        <VStack
          gap={3}
          align="stretch"
          h="100%"
          overflowY="auto"
          pr={1}
          css={{
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {images.map((image, index) => {
            const isSelected = index === selectedIndex

            return (
              <chakra.button
                key={image.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                border="2px solid"
                borderColor={isSelected ? '#ff6b13' : 'transparent'}
                borderRadius="6px"
                overflow="hidden"
                opacity={isSelected ? 1 : 0.65}
                flexShrink={0}
                transition="opacity 0.2s ease, border-color 0.2s ease"
                cursor="pointer"
                background="transparent"
                padding={0}
                _hover={{ opacity: 1 }}
              >
                <Box w="100%" aspectRatio="1.12" bg="#edf2f7">
                  <Image
                    src={image.url}
                    alt={`${vehicle.name} thumbnail ${index + 1}`}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    draggable={false}
                  />
                </Box>
              </chakra.button>
            )
          })}
        </VStack>

        <Box
          pointerEvents="none"
          position="absolute"
          left={0}
          right={1}
          bottom={0}
          h="72px"
          bgGradient="linear(to-t, white, rgba(255,255,255,0))"
        />
      </Box>

      <Box
        position="relative"
        borderRadius="12px"
        overflow="hidden"
        bg="#e8eef3"
        h={{ base: 'auto', md: '590px' }}
      >
        <Box aspectRatio={{ base: '1.25', md: '1.58' }} h={{ md: '100%' }}>
          <Image
            src={selectedImage.url}
            alt={`${vehicle.name} image ${selectedIndex + 1}`}
            w="100%"
            h="100%"
            objectFit="cover"
            draggable={false}
          />
        </Box>

        <Text
          position="absolute"
          top={{ base: 3, md: 6 }}
          left={{ base: 4, md: 6 }}
          color="#66728a"
          fontSize="16px"
        >
          {selectedIndex + 1} / {images.length}
        </Text>
      </Box>

      <HStack
        gap={3}
        mt={3}
        overflowX="auto"
        display={{ base: 'flex', md: 'none' }}
        pb={2}
        css={{
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {images.map((image, index) => {
          const isSelected = index === selectedIndex

          return (
            <chakra.button
              key={image.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              border="2px solid"
              borderColor={isSelected ? '#ff6b13' : 'transparent'}
              borderRadius="6px"
              overflow="hidden"
              minWidth="88px"
              opacity={isSelected ? 1 : 0.65}
              transition="opacity 0.2s ease, border-color 0.2s ease"
              cursor="pointer"
              background="transparent"
              padding={0}
              _hover={{ opacity: 1 }}
            >
              <Box w="100%" aspectRatio="1.12" bg="#edf2f7">
                <Image
                  src={image.url}
                  alt={`${vehicle.name} thumbnail ${index + 1}`}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  draggable={false}
                />
              </Box>
            </chakra.button>
          )
        })}
      </HStack>
    </Box>
  )
}