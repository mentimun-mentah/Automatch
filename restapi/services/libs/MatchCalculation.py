import numpy as np

class MatchCalculation:

    @classmethod
    def calculation(self,text1: str,text2: str,num_100 = False,ratio_calc = True):
        s = text1.lower()
        t = text2.lower()

        # Initialize matrix of zeros
        rows = len(s) + 1
        cols = len(t) + 1
        distance = np.zeros((rows,cols),dtype = int)

        # Populate matrix of zeros with the indeces of each character of both strings
        for i in range(1, rows):
            for k in range(1,cols):
                distance[i][0] = i
                distance[0][k] = k

        # Iterate over the matrix to compute the cost of deletions,insertions and/or substitutions
        for col in range(1, cols):
            for row in range(1, rows):
                if s[row - 1] == t[col - 1]:
                    cost = 0  # If the characters are the same in the two strings in a given position [i,j] then the cost is 0
                else:
                    # In order to align the results with those of the Python Levenshtein package, if we choose to calculate the ratio
                    # the cost of a substitution is 2. If we calculate just distance, then the cost of a substitution is 1.
                    if ratio_calc:
                        cost = 2
                    else:
                        cost = 1
                distance[row][col] = min(distance[row - 1][col] + 1,  # Cost of deletions
                                     distance[row][col - 1] + 1,  # Cost of insertions
                                     distance[row - 1][col - 1] + cost)  # Cost of substitutions

        # Computation of the Levenshtein Distance Ratio
        Ratio = ((len(s) + len(t)) - distance[row][col]) / (len(s) + len(t))
        # Raw data calculation Automatch
        raw_cal = str(round(Ratio,3))
        last_digit = raw_cal[4:] if raw_cal[4:] else '0'
        if not num_100:
            result = float(raw_cal[2:4] + '.' + last_digit)
        else:
            result = float(str(100 - (50 - int(raw_cal[2:4]))) + '.' + last_digit)

        return result
