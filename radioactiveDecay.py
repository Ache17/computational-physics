import numpy as np
import matplotlib.pyplot as plt

t = 100
dt = 0.1
N  = 100000
probability = 0.01

ts = [0]
particles = [N]

for currt in np.arange(dt, t, dt):
    HowManyDecayed = np.sum(np.random.rand(N) < probability)
    N = N - HowManyDecayed
    particles.append(N)
    ts.append(currt)
    if N == 0:
        break


plt.plot(ts, np.log(particles) )
plt.show()