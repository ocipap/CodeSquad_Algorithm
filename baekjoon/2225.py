n, k = map(int, input().split())
dp = [0] * (n+1)

for i in range(1, k+1):
  for j in range(0, n+1):
    if i == 1 or j == 0:
      dp[j] = 1
    else :
      dp[j] += dp[j-1]
  dp[j] %= 1000000000

print(dp[j])