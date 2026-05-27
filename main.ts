import time
import random
    from collections import namedtuple

    from microbit import display, button_a, button_b, Image
    # Map constant
COL_LEN = 5  # row and column number in micro: bit
MAP_LEN = COL_LEN ** 2

# Point in Map, data structure
point = namedtuple('point', ['x', 'y'])

# Image: LED opacity settings.
    LIGHT, MEDIUM, DENSE = "0", "5", "9"

# CLOCK: clock delay time and frequency
CLOCK = 0.002  # Period 2 ms
FRAME = 50  # How fast the snake goes
