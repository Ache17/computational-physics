g = 9.81;
l = 1;
theta = 30;
omega = 0;

function thetaDot(time, theta, omega)
{
  return omega;
}

function omegaDot(time, theta, omega)
{
  return g / l * Math.sin(theta);
}

function RKIV(omega_dot, theta_dot, dt)
{
  const o1 = omega_dot(time, theta, omega);
  const t1 = theta_dot(time, theta, omega);

  const o2 = omega_dot(time + dt / 2, theta + dt * t1 / 2, omega + dt * o1 / 2);
  const t2 = theta_dot(time + dt / 2, theta + dt * t1 / 2, omega + dt * o1 / 2);

  const o3 = omega_dot(time + dt / 2, theta + dt * t2 / 2, omega + dt * o2 / 2);
  const t3 = theta_dot(time + dt / 2, theta + dt * t2 / 2, omega + dt * o2 / 2);

  const o4 = omega_dot(time + dt / 2, theta + dt * t3, omega + dt * o3);
  const t4 = theta_dot(time + dt / 2, theta + dt * t3, omega + dt * o3);

  return {"dtheta" :  dt * (t1 + 2 * t2 + 2 * t3 + t4) / 6, "dom ega" : dt * (o1 + 2 * o2 + 2 * o3 + o4) / 6};
}


/*
dt = 0.1;
t  = 100;
thetas = [theta]; times = [0];
for (var time = dt; time < t ; time += dt)
{
  let deltas = RKIV(omegaDot, thetaDot, 0.1);

  theta = theta +  deltas[0];
  omega = omega +  deltas[1];

  thetas.push(theta);
  times.push(time);
}
*/
