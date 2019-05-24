//
//  HYReactNativeBaseViewController.h
//  RNProject
//
//  Created by 许伟杰 on 2019/5/20.
//  Copyright © 2019 JackXu. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface HYReactNativeBaseViewController : UIViewController

/**
 传递到React Native的参数
 */
@property (nonatomic, strong) NSDictionary * initialProperty;

/**
 React Native界面名称
 */
@property (nonatomic, copy) NSString * pageName;

+ (instancetype)RNPageWithName:(NSString*)pageName initialProperty:(NSDictionary*)initialProperty;

- (instancetype)initWithPageName:(NSString*)pageName initialProperty:(NSDictionary*)initialProperty;

@end
