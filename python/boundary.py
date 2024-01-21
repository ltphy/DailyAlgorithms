from enum import Enum
import numpy as np
from sympy import numbered_symbols
class Orientation (Enum):
    POTRAIT = "potrait"
    LANDSCAPE_LEFT = "landscape_left"
    LANDSCAPE_RIGHT = "landscape_right"

class DetectPoint: 
    x: float
    y: float
    def __init__(self,x,y):
        self.x = x
        self.y = y
    def __repr__(self):
        return f"<x:{self.x} y:{self.y}>"
height = 344
width = 896

screenWidth = width
screenHeight = height

def convert(point: DetectPoint, orientation="potrait"):
    x = 0
    y = 0
    if(Orientation.POTRAIT == orientation):
        x = point.x / screenWidth
        y = 1 - point.y / screenHeight 
    if(Orientation.LANDSCAPE_LEFT == orientation) :
        x = point.y / screenHeight
        y = point.x / screenWidth
    if(Orientation.LANDSCAPE_RIGHT == orientation):
        x = 1 - point.y / screenHeight
        y = point.x / screenWidth

    return DetectPoint(x, y)
print(f"height: {screenHeight} width: {screenWidth}")
# landscape left
leftLSTopRight = DetectPoint(100,100)
leftLStopLeft = DetectPoint(300,100)
leftLSbottomLeft = DetectPoint(300,300)
leftLSbottomRight = DetectPoint(100,300)

boundary = [leftLSTopRight, leftLStopLeft, leftLSbottomLeft, leftLSbottomRight]
print("landscape left")
for point in boundary:
    print(convert(point, Orientation.LANDSCAPE_LEFT))


# landscape right

rightLSbottomLeft =DetectPoint(100,100)
rightLSbottomRight = DetectPoint(300,100)
rightLStopRight = DetectPoint(300,300)
rightLStopLeft = DetectPoint(100,300)


boundary = [rightLSbottomLeft, rightLSbottomRight, rightLStopRight, rightLStopLeft]
print("landscape right")
for point in boundary:
    print(convert(point, Orientation.LANDSCAPE_RIGHT))
