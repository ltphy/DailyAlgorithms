import math 
import numpy as np
from scipy.spatial.transform import Rotation as R

def angle_between_two_vector(A, B):
    # Calculate the dot product
    dot_product = A[0] * B[0] + A[1] * B[1]

    # Calculate the magnitudes of vectors A and B
    magnitude_A = math.sqrt(A[0]**2 + A[1]**2)
    magnitude_B = math.sqrt(B[0]**2 + B[1]**2)

    # Calculate the angle in radians
    angle_rad = math.acos(dot_product / (magnitude_A * magnitude_B))

    # Convert the angle from radians to degrees
    angle_deg = math.degrees(angle_rad)

    # Determine if the angle is positive or negative
    if dot_product > 0:
        print(f"The angle between vectors A and B is {angle_deg} degrees (acute angle).")
    else:
        print(f"The angle between vectors A and B is {angle_deg} degrees (obtuse angle).")


def adjusted_angle_between_two_vector(pivot_vector, drift_vector) -> float:
    pivot_angle = math.atan2(pivot_vector[1], pivot_vector[0])
    drift_angle = math.atan2(drift_vector[1], drift_vector[0])
    return math.degrees(pivot_angle - drift_angle)

def projection_onto_line(P, Q, D):
    V = P - Q
    dot_product = np.dot(V, D)
    squared_magnitude = np.dot(D, D)
    projection = Q + (dot_product / squared_magnitude) * D
    return projection


def get_adjusted_position(edges, adjusted_angle, projected_position):
    z_matrix = R.from_euler('z', adjusted_angle, degrees=True).as_matrix()
    user_edges = edges - projected_position
    rotated_edges = z_matrix @ np.transpose(user_edges)
    updated_edges = np.transpose(rotated_edges) + projected_position
    return updated_edges


def get_adjusted_position_start_point(edges, adjusted_angle):
    start_point = edges[2]
    z_matrix = R.from_euler('z', adjusted_angle, degrees=True).as_matrix()
    user_edges = edges - start_point
    rotated_edges = z_matrix @ np.transpose(user_edges)
    updated_edges = np.transpose(rotated_edges) + start_point
    return updated_edges
    

user_position = np.array([5, 5, 0])
vanishing_point = np.array([5, 16, 0])
start_point  = np.array([2, 4, 0])
end_point = np.array([3, 16, 0])
additional_points = np.array([[-12, 3.5, 0], [-6,4,0]])
edges = np.concatenate((additional_points, [start_point, end_point]), axis =  0)
start_end_vector = end_point - start_point


vanishing_point_vector = vanishing_point - user_position
adjusted_angle = adjusted_angle_between_two_vector(vanishing_point_vector, start_end_vector)
print("adjusted angle", adjusted_angle)
projected_position = projection_onto_line(user_position, start_point, end_point -start_point )

adjusted_positions = get_adjusted_position(edges, projected_position = projected_position ,adjusted_angle=adjusted_angle)

print("adjusted position", adjusted_positions)

adjusted_positions2 = get_adjusted_position_start_point(edges ,adjusted_angle=adjusted_angle)

print("adjusted position start point", adjusted_positions2)


# # Define vectors A and B as lists of their components
# A = [3, 4]
# B = [-2, -4]

# angle_between_two_vector(A,B)


# # Define the points and direction vector
# P = np.array([5, 5])
# Q1 = np.array([2, 4])  # First point on the line
# Q2 = np.array([3, 4])  # Second point on the line
# D = Q2 - Q1

# # Calculate the projection of point P onto the line while ensuring it's between Q1 and Q2
# projection = projection_onto_line(P, Q1, D)

# print("Projection:", projection)
