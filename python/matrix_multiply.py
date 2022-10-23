from turtle import pos
import numpy as np
from scipy.spatial.transform import Rotation as R
from scipy import linalg

import math
class WorldPosition:
    def __init__ (self, x, y, z, rotation):
        self.x = x
        self.y = y
        self.z = z
        self.rotation = rotation

def create_rotation_z_matrix(angle = 0): 
    r = R.from_euler('z', angle, degrees=True)
    return r

def create_matrix(position: WorldPosition): 
    matrix4x4 = np.empty((4,4))
    rotation_matrix = create_rotation_z_matrix(position.rotation).as_matrix()
    matrix4x4[:3,:3] = rotation_matrix
    matrix4x4[:,3] = [position.x, position.y, position.z,1]
    print(matrix4x4)
    matrix4x4[3,:] = [0,0,0,1]
    return matrix4x4

def get_euler_angle(rotation_matrix):
    r = R.from_matrix(rotation_matrix)
    return r.as_euler('zyx', degrees=True)


world_location_matrix = create_matrix(position = WorldPosition(-12.5,-1.08,1.2,40))
QR_world_matrix = create_matrix(position = WorldPosition(0.20,0.1,0, 180-10))
QR_world_location = world_location_matrix @ QR_world_matrix

euler_angle = get_euler_angle(QR_world_location[:3,:3])

destination_location = WorldPosition( 0, 0,z= 1.2, rotation=0)


#translate 

print("QR world location", QR_world_location)
print("QR euler angle", euler_angle)

tx = destination_location.y - QR_world_location[1,3]
ty = -(destination_location.z - QR_world_location[2,3])
tz = destination_location.x - QR_world_location[0,3] 

print(tx,ty,tz)
euler_angle_z = euler_angle[0]
# pitch = 
test_matrix = create_matrix(position = WorldPosition(tz, tx, ty, 0 ))

rotated_location_matrix = create_matrix(position=WorldPosition(0,0,0, (-euler_angle_z+180))) @ test_matrix

print(rotated_location_matrix)
