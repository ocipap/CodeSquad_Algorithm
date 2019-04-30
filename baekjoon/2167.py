n, m = map(int, input().split())
arr = [[0] * (m+1)]
dp = [[0] * (m+1) for i in range(n+1)]
for _ in range(n):
    arr.append([0] + list(map(int, input().split())))


for i in range(1, n+1):
    for j in range(1, m+1):
        dp[i][j] = arr[i][j] + dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1]

for _ in range(int(input())):
    i, j, x, y = map(int, input().split())
    answer = dp[x][y] - dp[i-1][y] - dp[x][j-1] + dp[i-1][j-1]
    print(answer)