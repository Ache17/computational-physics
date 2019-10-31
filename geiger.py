import winsound
import numpy as np
from time import sleep
import matplotlib.pyplot as plt

time_max = 1000
number   = 100
start    = number
lambda1  = 0.005
ts, ns = [0], [number]

for t in np.arange(1, time_max):
    cnt = 0
    for atom in np.arange(0, number):
        decay = np.random.rand()
        if decay < lambda1:
            cnt += 1
            winsound.Beep(600, 100)
    number -= cnt
    ts.append(t)
    ns.append(number)
    sleep(0.005)

plt.plot(ts, ns, label="experimental")
plt.plot(ts, start * np.exp(-lambda1 * np.array(ts)), label="analytical")
plt.legend()
plt.show()