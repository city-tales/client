#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int solve(int ind, vector<int>& nums, vector<int>& dp, int start) {
        if (ind < start) return 0;
        if (ind == start) return nums[start];

        if (dp[ind] != -1) return dp[ind];

        int pick = nums[ind] + solve(ind - 2, nums, dp, start);
        int skip = solve(ind - 1, nums, dp, start);

        return dp[ind] = max(pick, skip);
    }

    int rob(vector<int>& nums) {
        int n = nums.size();
        if (n == 1) return nums[0];

        vector<int> dp1(n, -1), dp2(n, -1);

        // Case 1: Rob from 0 to n-2
        int case1 = solve(n - 2, nums, dp1, 0);

        // Case 2: Rob from 1 to n-1
        int case2 = solve(n - 1, nums, dp2, 1);

        return max(case1, case2);
    }
};

int main() {
    vector<int> nums = {2, 3, 2};  // 🔥 You can change this
    Solution s;
    cout << "Maximum money that can be robbed (circular): " << s.rob(nums) << endl;
    return 0;
}
